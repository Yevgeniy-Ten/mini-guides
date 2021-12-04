import * as $ from "jquery"
import Post from "@models/Post";
import "./styles/style.css"
import "./styles/style.scss"
//@===src, @models===src/models
// все стили там картинки можно и даже нужно подключать сюда

const post = new Post("webpack ten post title")
$(".post").addClass("code").html(post.toString())