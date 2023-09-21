import { Text } from './text.js';
import { Stroke } from './stroke.js';
import { Shadow } from './shadow.js';
import { Canvas } from './canvas.js';
import { Downloader } from './downloader.js';

// ダウンロード処理イベント付与
new Downloader;

// テキストエリア
new Text;
Text.createDropDown();

// ストロークエリア
new Stroke;

// 影エリア
new Shadow;

// デフォルトcanvas生成
new Canvas;
Canvas.createCanvas();
