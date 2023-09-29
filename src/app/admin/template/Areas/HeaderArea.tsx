import React from 'react';

const HeaderArea = () => {
  return (
    <>
      <div className="row p-1 m-3">
        <p className="p-1 h2 mx-auto text-white bg-secondary">テンプレート作成（管理者用）</p>
        <div className="p-1 h5 text-secondary m-auto">
          <p>テロップやデザインタイトルを自由に作成できます。</p>
          <p>文章を入力して好みのデザインを選択すれば、簡単にpng形式でダウンロード可能です。</p>
        </div>
      </div>
    </>
  );
}

export default HeaderArea;