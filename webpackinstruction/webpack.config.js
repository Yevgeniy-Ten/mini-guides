// "scripts": {
//     "dev": "cross-env NODE_ENV=development webpack --mode development",
//         "build": "cross-env NODE_ENV=production webpack --mode production",
//         "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
//         "start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open"
// },
// режимы разразботки, watch--чтобы автомат сохранял файлы, webpack-dev-server ===live-server
// если не собираемся публиковать npm то можно поставить private true, вместо main в package.json
// для указывания путей подключяем модуль path -есть везде стандартный модуль
// ___dirname это папка проекта в нашем случае webpackmaterial
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebPackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const isDev = process.env.NODE_ENV === "development"// проверка в какой режиме находимся
console.log(isDev, "isdev") // смотрит правильно ли прописали

const optimization = () => { //все это можно использовать и в поле optimization в exports
    const config = {
        // если нескольких файлах подгружена одна и та же библиотека то это библиотека попадёт в дист несколько раз, бьет производительность
        // добавляя этот параметр только один раз
        splitChunks: {
            chunks: "all",
        }
    }
    if (!isDev) {
        // минифицируют файлы в продакшоне, css+html,
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
}
const cssLoaders = (extra) => {
    const loader = [{
        loader: MiniCssExtractPlugin.loader,
        options: {}
    }, "css-loader"]
    if (extra) {
        loader.push(extra)
    }
    return loader
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
// Используем для настройки вебпак компилятора
module.exports = {
    // главная папка в которой содержится файлы проекта, от неё пишем пути
    context: path.resolve(__dirname, "src"),
    // mode -режим в котором надо разрабатывать
    mode: "development",
    // корневой файл где собираются все зависимости, основной код
    entry: {
        main: ["@babel/polyfill", "./index.js"], /*-- это чанки, в выходе получим два чанка, два файла, так как два пути входа
в filename в [name] попадают названия этих чанков чанк.bundle.js */
        analytics: "./analytics.js"
    },
    output: {
        //что в []-это патерны, для индивидуальных названий чанков
        filename: filename("js"),
        path: path.resolve(__dirname, "dist")
    },
    // какие файлы нужны понимать по умолчанию чтоб при импортах не писать .js .css и т.д
    resolve: {
        extensions: [".js", ".json", ".png"],
        alias: {
            // alias нужны чтоб не писать большие пути в примеры в index.js
            "@models": path.resolve(__dirname, "src/models"),
            "@": path.resolve(__dirname, "src")
        }
    },
    optimization: optimization(),
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            // минифицирование если продакшон минифицируем
            minify: {
                collapseWhitespace: !isDev ? true : false,
            }
        }),
        new CleanWebpackPlugin(),
        // new CopyWebPackPlugin([{
        //     from: path.resolve(__dirname, "src/favicon.ico"),
        //     to: path.resolve(__dirname, "dist")
        // }]) используется чтобы файлы в src попали в продакшон в нашем случае dist
        // указываем как будут называеться наши css файлы
        new MiniCssExtractPlugin({
            filename: filename("css"),
        })
    ],
    devServer: {
        port: 4200,
        // hot ===hmr hot module replace чето чето -->даёт нам возможность использовать это или нет
        hot: isDev,
    },
    //какие модули мы можем использовать
    module: {
        rules: [
            //babel для работы нужен еще полифилл
            {
                test: /\.m?js$/,
                //exclude- исключения
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        //полифил
                        presets: ['@babel/preset-env'],
                        // плагины помогающие работать с новым синтаксисом
                        plugins:["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
            ,
            {
                //для тайпcкрипта
                test: /\.ts$/,
                //exclude- исключения
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        //полифил, нужны для тайпскрипта еще
                        presets: ['@babel/preset-env',"@babel/preset-typescript"],
                        // плагины помогающие работать с новым синтаксисом
                        plugins:["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
            ,
            {
                //если встречается файл расширения в данном случае css, то use и что надо юзать. не забываем указывать $
                test: /\.css$/,
                // webpack читает справа налево, поэтому сперва юзаем нужные, два вида написания loaderoв обьект и строка
                use: cssLoaders()
            },
            {
                //для sass надо установить плагин для sass, в [ac] это означает типо либо а либо c sass,scss
                test: /\.s[ac]ss$/,
                // webpack читает справа налево, поэтому сперва юзаем нужные, два вида написания loaderoв обьект и строка
                use: cssLoaders("sass-loader")
            },
            //для чтения картинок
            {
                test: /\.(png|svg|jpeg|gif)$/,
                use: ["file-loader"]
            },
            //для чтения шрифтов
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            }
        ]
    }
}
//webpack понимает только js поэтому нам нужны модули в которых лежат другие расширения(не только js),
// все плагины в докуметнации webpack plugins
/*-D html-webpack-plugin --плагин даёт автомат создает index.html в dist уже с подключенными скриптами
* и подключает он последний используемый хэш, даже если в dist лежит старый скрипт, template-наш контентный html
* без него, постоянно создаётся новый
* -D clean-webpack-plugin чтобы в dist постоянно не создавались новые файлы связок, а постоянно стояли актуальные
* -D style-loader css-loader, style-loader---> подключает в дисте в html стили, css-loader даёт импортировать css
* в index.js
* -D file-loader  для того чтобы импортировать различные типы файлов кроме png,img,xml и.т.д
* для xml,csv нужны свои loader для csv нужен papaparse
* -D webpack-dev-server это автоматически изменения в коде и на странице разом как в реакте npm start,
* но при этом мы не увидим в папке дист что там скомпилил вебпак, все в оперативной памяти
* -D copy-webpack-plugin  используется чтобы файлы из режима (папки src) разработки попали в продакшон
* -D mini-css-extract-plugin чтобы стили не прописывались в теге HEAD
* -D cross-env  может устанавливать системные переменные, пример в режимах разработки сверху 1 строка
* -D terser-webpack-plugin минифицаторы
* -D optimize-css-assets-webpack-plugin минифицаторы
*  npm i -D @babel/plugin-proposal-class-properties для того чтобы babel понимал синтаксисов классов
   npm i -D eslint-loader для eslint
   webpack-bundle analyzer для конечной сборки requier подключается и в плагины
*/