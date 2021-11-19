$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});


// <thisとchildren>
// ・イベント処理を複数対象操作したい場合に、便利なのが操作対象を指定できるthisとchildren。

// <thisとchildrenの違い>
// <this>
// ・「this」はイベントが発生した要素のみを変化させる。
// 　　→ex.  thisを使うと正方形をクリック時に、その正方形のみslideUPして消えていく機能を作れる。
// ・多くの処理をまとめて書くことができる。
// 　　→コード上からでは、何をどうしたときに動作するのが判別しにくいデメリットもある。
/*
$(function(){
  $('.box1').on('click', function(){

    box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる。という設定。
    $(this).slideUp();
  });
});
*/
// <children>
// ・「children」はHTML要素直下のすべての要素を取得できる。
// 　　→ex.  childrenを使うとリスト(ul要素)の子要素であるli内の文字列がすべて黒色から赤色に変化する機能を作れる。
/*
$(function(){

  button要素がクリックされたときに、処理を実行。
  $('button').on('click', function(){

    .children()は、HTML要素直下のすべての子要素を取得する。
    　→li要素が対象
    $('ul').children().css('color','red');
  });
});
*/


