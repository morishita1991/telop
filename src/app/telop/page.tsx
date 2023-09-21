'use client';
import "./sample.css";
import HeaderArea from "./ts/HeaderArea";
import CanvasArea from "./ts/CanvasArea";
// require('./js/main.js');

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderArea></HeaderArea>
      <div className="ms-4" style={{ maxHeight: '30px' }}>
        <span className="h4 m-3 align-top">テキスト</span>
      </div>
      <div className="border m-3" style={{ maxWidth: '1080px' }}>
        <div className="row mx-3 h3">
          <div className="col-sm-4 p-3">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="mt-5">
                  <input type="text" className="form-control" id="input-text" placeholder="文字を入力" defaultValue="サンプル"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 p-3">
            <div className="row">
              <div className="col-12">
                <div className="mt-5">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="fontFamilyList" data-bs-toggle="dropdown" aria-expanded="false">
                    フォントを選択
                  </button>
                  <ul className="dropdown-menu" id="font-select" aria-labelledby="fontFamilyList">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 mb-5 h5">
          <div className="col-sm-3">
            <div className="row">
              <div className="col-12 pt-3 mb-2 mt-3">
                <span style={{ display: 'inline-block' }}>サイズ</span>
                <input type="text" className="form-control ms-2" id="input-font-size" defaultValue="105" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
                <span style={{ display: 'inline-block' }}>px</span>
              </div>
              <div className="col-12">
                <input type="range" className="form-range" min="30" max="180" step="5" id="fontSizeRange" defaultValue="105" style={{ maxWidth: '200px' }}></input>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-12 pt-3 mb-2 mt-3">
                <span style={{ display: 'inline-block' }}>太さ</span>
                <input type="text" className="form-control ms-2" id="input-font-weight" defaultValue="500" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
              </div>
              <div className="col-12">
                <input type="range" className="form-range" min="100" max="900" step="100" id="fontWeightRange" defaultValue="500" style={{ maxWidth: '200px' }}></input>
              </div>
            </div>
          </div>
          <div className="col-sm-3" style={{ maxWidth: '200px' }}>
            <div className="row">
              <div className="col-12 pt-2 mb-2 mt-3">
                <span style={{ display: 'inline-block' }}>色</span>
                <input type="text" className="form-control ms-2" id="input-color-text" defaultValue="#00CCFF" style={{ maxWidth: '100px', display: 'inline-block' }}></input>
              </div>
              <div className="col-12">
                <input type="color" className="form-control form-control-color" id="color-text" name="color" defaultValue="#00CCFF"></input>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-12 pt-2 mb-2 mt-4">
                <span style={{ display: 'inline-block' }}>不透明度</span>
                <input type="text" className="form-control ms-2" id="input-opacity-text" defaultValue="1" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
              </div>
              <div className="col-12">
                <input type="range" className="form-range" min="0" max="1" step="0.1" id="fontOpacityRange" defaultValue="1" style={{ maxWidth: '200px' }}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-4">
        <p className="h4 m-3 pt-5">キャンバスエリア</p>
      </div>
      <div className="border p-4 m-3 mb-5" style={{ maxWidth: '1920px' }}>
        <div className="row my-3 pb-3">
          <div className="col-sm-6 ms-3 mt-4 pt-3 h5" style={{ maxWidth: '200px' }}>
            <input className="form-check-input" type="checkbox" id="bgColorCheck"></input>
            <label className="form-check-label ms-1 mt-1" htmlFor="bgColorCheck" style={{ display: 'inline-block' }}>
              背景色の設定
            </label>
          </div>
          <div className="col-sm-6">
            <div className="border row" style={{ maxWidth: '600px' }}>
              <div className="col-sm-6 ms-5" style={{ maxWidth: '200px' }}>
                <div className="row mt-4 pt-3">
                  <input type="color" className="form-control form-control-color" id="bg-color" name="color" defaultValue="#FFFFFF" style={{ display: 'inline-block' }}></input>
                  <input type="text" className="form-control ms-2" id="input-bg-color" defaultValue="#FFFFFF" style={{ maxWidth: '100px', display: 'inline-block' }}></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-12 my-4 h5">
                  <span style={{ display: 'inline-block' }}>不透明度</span>
                  <input type="text" className="form-control ms-2" id="input-bg-opacity" defaultValue="1" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
                  <input type="range" className="form-range" min="0" max="1" step="0.1" id="bgOpacityRange" defaultValue="1" style={{ maxWidth: '200px' }}></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CanvasArea></CanvasArea>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="strokeCheckBox" data-bs-toggle="collapse" data-bs-target="#strokeAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='strokeCheckBox'>ストローク</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="strokeAria" style={{ maxWidth: '1080px' }}>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="shadowCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseShadowAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='shadowCheckBox'>影</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="collapseShadowAria" style={{ maxWidth: '1080px' }}>
        <div className="row border m-3 h5">
          <div className="row p-3 ms-3">
            <div className="col-sm-3 me-5" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>距離</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-dis" defaultValue="0" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
                  <input type="range" className="form-range" min="0" max="50" step="1" id="shadowDisRange" defaultValue="0"></input>
                </div>
              </div>
            </div>
            <div className="col-sm-3 me-5" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>角度</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-deg" defaultValue="0" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
                  <span style={{ display: 'inline-block' }}>°</span>
                  <input type="range" className="form-range" min="0" max="360" step="1" id="shadowDegRange" defaultValue="0"></input>
                </div>
              </div>
            </div>
            <div className="col-sm-3 me-5" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>サイズ</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-size" defaultValue="105" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
                  <span style={{ display: 'inline-block' }}>px</span>
                  <input type="range" className="form-range" min="30" max="180" step="1" id="shadowSizeRange"></input>
                </div>
              </div>
            </div>
            <div className="col-sm-3" style={{ maxWidth: '200px' }}>
              <div className="col-12 mt-3">
                <span style={{ display: 'inline-block' }}>色</span>
                <input type="text" className="form-control ms-2" id="input-color-shadow" defaultValue="#000000" style={{ maxWidth: '100px', display: 'inline-block' }}></input>
                <input type="color" className="form-control form-control-color mt-2" id="color-shadow" name="color" style={{ fontSize: '20px' }} defaultValue="#000000"></input>
              </div>
            </div>
          </div>
          <div className="row p-3 ms-3">
            <div className="col-sm-3" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>不透明度</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-opacity" defaultValue="1" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
                  <input type="range" className="form-range" min="0" max="1" step="0.1" defaultValue="1" id="shadowOpacityRange"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="gradationCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseGradationAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='gradationCheckBox'>グラデーション</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="collapseGradationAria">
        <div className="row border m-3 h5">
        </div>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="brightCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseBrightAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='brightCheckBox'>光沢</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="collapseBrightAria">
        <div className="row border m-3 h5">
        </div>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="textureCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseTextureAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='textureCheckBox'>テクスチャ</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 collapse" id="collapseTextureAria">
        <div className="row border m-3 h5">
        </div>
      </div>
    </main>
  )
}
