<?php


namespace App\Plugins\User\src\Middleware;


use App\CodeFec\Admin\Admin;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

/**
 * Auth 组件的基本验证
 * @package App\Plugins\User\src\Middleware
 */
class AuthMiddleware implements MiddlewareInterface
{

    /**
     * @var ContainerInterface
     */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        if(auth()->check()){
            if(request()->path() === "register" || request()->path() === "login"){
                return admin_abort(['msg' => '您已登录']);
            }
        }
        return $handler->handle($request);
    }

}