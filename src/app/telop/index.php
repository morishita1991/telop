<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link rel="stylesheet" href="sample.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css">
  <script defer src="https://use.fontawesome.com/releases/v6.4.2/js/all.js"></script>
</head>

<body>
  <div class="p-1 m-3">
    <p class="p-1 h2 mx-auto text-white bg-secondary">テロップ制作サイト（仮）</p>
    <div class="p-1 h5 text-secondary m-auto">
      <p>テロップやデザインタイトルを自由に作成できます。</p>
      <p>文章を入力して好みのデザインを選択すれば、簡単にpng形式でダウンロード可能です。</p>
    </div>
  </div>
  <!-- テキスト -->
  <div class="ms-4" style="max-height: 30px">
    <span class="h4 m-3 align-top">テキスト</span>
  </div>
  <div class="border m-3" style="max-width:1080px">
    <div class="row mx-3 h3">
      <div class="col-sm-4 p-3">
        <div class="row">
          <div class="col-12 mb-3">
            <div class="mt-5">
              <input type="text" class="form-control" id="input-text" placeholder="文字を入力" value="サンプル">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 p-3">
        <div class="row">
          <div class="col-12">
            <div class="mt-5">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="fontFamilyList" data-bs-toggle="dropdown" aria-expanded="false">
                フォントを選択
              </button>
              <ul class="dropdown-menu" id="font-select" aria-labelledby="fontFamilyList">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-3 mb-5 h5">
      <div class="col-sm-3">
        <div class="row">
          <div class="col-12 pt-3 mb-2 mt-3">
            <span style="display: inline-block">サイズ</span>
            <input type="text" class="form-control ms-2" id="input-font-size" value="105" style="max-width: 60px; display: inline-block">
            <span style="display: inline-block">px</span>
          </div>
          <div class="col-12">
            <input type="range" class="form-range" min="30" max="180" step="5" id="fontSizeRange" value="105" style="max-width:200px">
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="row">
          <div class="col-12 pt-3 mb-2 mt-3">
            <span style="display: inline-block">太さ</span>
            <input type="text" class="form-control ms-2" id="input-font-weight" value="500" style="max-width: 60px; display: inline-block">
          </div>
          <div class="col-12">
            <input type="range" class="form-range" min="100" max="900" step="100" id="fontWeightRange" value="500" style="max-width:200px">
          </div>
        </div>
      </div>
      <div class="col-sm-3" style="max-width:200px">
        <div class="row">
          <div class="col-12 pt-2 mb-2 mt-3">
            <span style="display: inline-block">色</span>
            <input type="text" class="form-control ms-2" id="input-color-text" value="#00CCFF" style="max-width:100px; display: inline-block">
          </div>
          <div class="col-12">
            <input type="color" class="form-control form-control-color" id="color-text" name="color" value="#00CCFF">
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="row">
          <div class="col-12 pt-2 mb-2 mt-4">
            <span style="display: inline-block">不透明度</span>
            <input type="text" class="form-control ms-2" id="input-opacity-text" value="1" style="max-width:50px; display: inline-block">
          </div>
          <div class="col-12">
            <input type="range" class="form-range" min="0" max="1" step="0.1" id="fontOpacityRange" value="1" style="max-width:200px">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- キャンバスエリア -->
  <div class="ms-4">
    <p class="h4 m-3 pt-5">キャンバスエリア</p>
  </div>
  <div class="border p-4 m-3 mb-5" style="max-width:1920px">
    <div class="row my-3 pb-3">
      <div class="col-sm-6 ms-3 mt-4 pt-3 h5" style="max-width:200px">
        <input class="form-check-input" type="checkbox" id="bgColorCheck">
        <label class="form-check-label ms-1 mt-1" for="bgColorCheck" style="display:inline-block;">
          背景色の設定
        </label>
      </div>
      <div class="col-sm-6">
        <div class="border row" style="max-width:600px;">
          <div class="col-sm-6 ms-5" style="max-width:200px">
            <div class="row mt-4 pt-3">
              <input type="color" class="form-control form-control-color" id="bg-color" name="color" value="#FFFFFF" style="display:inline-block;">
              <input type="text" class="form-control ms-2" id="input-bg-color" value="#FFFFFF" style="max-width:100px; display:inline-block;">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="col-12 my-4 h5">
              <span style="display: inline-block">不透明度</span>
              <input type="text" class="form-control ms-2" id="input-bg-opacity" value="1" style="max-width:50px; display: inline-block;">
              <input type="range" class="form-range" min="0" max="1" step="0.1" id="bgOpacityRange" value="1" style="max-width:200px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <canvas id="canvas" width="1920" height="350"></canvas>
    </div>
    <div class="d-flex flex-row ms-3 mt-4">
      <button class="btn btn-primary" type="submit" id="download">画像ダウンロード</button>
    </div>
  </div>
  <!-- ストローク -->
  <div class="m-2 ms-5 align-top">
    <div style="max-height: 50px">
      <div class="d-flex flex-row">
        <input class="btn btn-default align-top" type="checkbox" id="strokeCheckBox" data-bs-toggle="collapse" data-bs-target="#strokeAria" aria-expanded="false" aria-controls="collapseExample" style="transform:scale(1.5)"></input>
        <label class="form-check-label ms-3 mt-1 h4" for="strokeCheckBox">ストローク</label>
      </div>
    </div>
  </div>
  <div class="border ms-3 mb-5 collapse" id="strokeAria" style="max-width:1080px">
    <!-- 動的に生成 -->
  </div>
  <!-- 影 -->
  <div class="m-2 ms-5 align-top">
    <div style="max-height: 50px">
      <div class="d-flex flex-row">
        <input class="btn btn-default align-top" type="checkbox" id="shadowCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseShadowAria" aria-expanded="false" aria-controls="collapseExample" style="transform:scale(1.5)"></input>
        <label class="form-check-label ms-3 mt-1 h4" for="shadowCheckBox">影</label>
      </div>
    </div>
  </div>
  <div class="border ms-3 mb-5 collapse" id="collapseShadowAria" style="max-width:1080px">
    <div class="row border m-3 h5">
      <div class="row p-3 ms-3">
        <div class="col-sm-3 me-5" style="max-width:200px">
          <div class="row">
            <div class="col-12 mt-4">
              <span style="display: inline-block">距離</span>
              <input type="text" class="form-control ms-2" id="input-shadow-dis" value="0" style="max-width:50px; display: inline-block">
              <input type="range" class="form-range" min="0" max="50" step="1" id="shadowDisRange" value="0">
            </div>
          </div>
        </div>
        <div class="col-sm-3 me-5" style="max-width:200px">
          <div class="row">
            <div class="col-12 mt-4">
              <span style="display: inline-block">角度</span>
              <input type="text" class="form-control ms-2" id="input-shadow-deg" value="0" style="max-width:60px; display: inline-block">
              <span style="display: inline-block">°</span>
              <input type="range" class="form-range" min="0" max="360" step="1" id="shadowDegRange" value="0">
            </div>
          </div>
        </div>
        <div class="col-sm-3 me-5" style="max-width:200px">
          <div class="row">
            <div class="col-12 mt-4">
              <span style="display: inline-block">サイズ</span>
              <input type="text" class="form-control ms-2" id="input-shadow-size" value="105" style="max-width: 60px; display: inline-block">
              <span style="display: inline-block">px</span>
              <input type="range" class="form-range" min="30" max="180" step="1" id="shadowSizeRange">
            </div>
          </div>
        </div>
        <div class="col-sm-3" style="max-width:200px">
          <div class="col-12 mt-3">
            <span style="display: inline-block">色</span>
            <input type="text" class="form-control ms-2" id="input-color-shadow" value="#000000" style="max-width:100px; display: inline-block">
            <input type="color" class="form-control form-control-color mt-2" id="color-shadow" name="color" style="font-size:20px;" value="#000000">
          </div>
        </div>
      </div>
      <div class="row p-3 ms-3">
        <div class="col-sm-3" style="max-width:200px">
          <div class="row">
            <div class="col-12 mt-4">
              <span style="display: inline-block">不透明度</span>
              <input type="text" class="form-control ms-2" id="input-shadow-opacity" value="1" style="max-width:50px; display: inline-block;">
              <input type="range" class="form-range" min="0" max="1" step="0.1" value="1" id="shadowOpacityRange">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- グラデーション -->
  <div class="m-2 ms-5 align-top">
    <div style="max-height: 50px">
      <div class="d-flex flex-row">
        <input class="btn btn-default align-top" type="checkbox" id="gradationCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseGradationAria" aria-expanded="false" aria-controls="collapseExample" style="transform:scale(1.5)"></input>
        <label class="form-check-label ms-3 mt-1 h4" for="gradationCheckBox">グラデーション</label>
      </div>
    </div>
  </div>
  <div class="border ms-3 mb-5 collapse" id="collapseGradationAria">
    <div class="row border m-3 h5">
    </div>
  </div>
  <!-- 光沢 -->
  <div class="m-2 ms-5 align-top">
    <div style="max-height: 50px">
      <div class="d-flex flex-row">
        <input class="btn btn-default align-top" type="checkbox" id="brightCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseBrightAria" aria-expanded="false" aria-controls="collapseExample" style="transform:scale(1.5)"></input>
        <label class="form-check-label ms-3 mt-1 h4" for="brightCheckBox">光沢</label>
      </div>
    </div>
  </div>
  <div class="border ms-3 mb-5 collapse" id="collapseBrightAria">
    <div class="row border m-3 h5">
    </div>
  </div>
  <!-- テクスチャ -->
  <div class="m-2 ms-5 align-top">
    <div style="max-height: 50px">
      <div class="d-flex flex-row">
        <input class="btn btn-default align-top" type="checkbox" id="textureCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseTextureAria" aria-expanded="false" aria-controls="collapseExample" style="transform:scale(1.5)"></input>
        <label class="form-check-label ms-3 mt-1 h4" for="textureCheckBox">テクスチャ</label>
      </div>
    </div>
  </div>
  <div class="border ms-3 collapse" id="collapseTextureAria">
    <div class="row border m-3 h5">
    </div>
  </div>
  <script src="js/main.js" type="module"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>

</html>
