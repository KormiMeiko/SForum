<?php

declare(strict_types=1);
/**
 * This file is part of zhuchunshu.
 * @link     https://github.com/zhuchunshu
 * @document https://github.com/zhuchunshu/SForum
 * @contact  laravel@88.com
 * @license  https://github.com/zhuchunshu/SForum/blob/master/LICENSE
 */
namespace App\Plugins\Topic\src\Handler\Topic;

use App\Plugins\Topic\src\Annotation\Topic\UpdateFirstMiddleware;
use App\Plugins\Topic\src\Annotation\Topic\UpdateLastMiddleware;
use App\Plugins\Topic\src\Annotation\Topic\UpdateMiddleware;
use Hyperf\Di\Annotation\AnnotationCollector;

class EditTopic
{
    public function handler()
    {
        $request = request()->all();
        $handler = function ($request) {
            return $request;
        };
        // 通过中间件
        $run = $this->throughMiddleware($handler, $this->middlewares());
        return $run($request);
    }

    /**
     * 通过中间件 through the middleware.
     * @param $handler
     * @param $stack
     * @return \Closure|mixed
     */
    protected function throughMiddleware($handler, $stack)
    {
        // 闭包实现中间件功能 closures implement middleware functions
        foreach ($stack as $middleware) {
            $handler = function ($request) use ($handler, $middleware) {
                if ($middleware instanceof \Closure) {
                    return $middleware($request, $handler);
                }

                return call_user_func([new $middleware(), 'handler'], $request, $handler);
            };
        }
        return $handler;
    }

    private function middlewares(): array
    {
        $middlewares = [];
        foreach (AnnotationCollector::getClassesByAnnotation(UpdateFirstMiddleware::class) as $key => $value) {
            $middlewares[] = $key;
        }
        foreach (AnnotationCollector::getClassesByAnnotation(UpdateMiddleware::class) as $key => $value) {
            $middlewares[] = $key;
        }
        foreach (AnnotationCollector::getClassesByAnnotation(UpdateLastMiddleware::class) as $key => $value) {
            $middlewares[] = $key;
        }
        $endMiddlewares = Itf()->get('topic-edit-handle-middleware-end');
        krsort($endMiddlewares);
        foreach ($endMiddlewares as $value) {
            $middlewares[] = $value;
        }
        return array_reverse($middlewares);
    }
}
