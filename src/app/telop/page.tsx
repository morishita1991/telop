'use client';
import "./sample.css";
import TextArea from "./Areas/TextArea";
import ShadowArea from "./Areas/ShadowArea";
import StrokeArea from "./Areas/StrokeArea";
import HeaderArea from "./Areas/HeaderArea";
import CanvasArea from "./Areas/CanvasArea";
import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderArea></HeaderArea>
      <TextArea></TextArea>
      <CanvasArea></CanvasArea>
      <StrokeArea></StrokeArea>
      <ShadowArea></ShadowArea>
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
