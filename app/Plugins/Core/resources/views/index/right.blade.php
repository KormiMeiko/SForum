<div class="row row-cards">
    @foreach(Itf()->get("index_right") as $value)
        @include($value)
    @endforeach
</div>