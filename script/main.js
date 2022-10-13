$(function(){
    //닫기 버튼 누르면 다시 나타나지않게 변경한다. 
    $("#close_banner").click(function(){ 
        $("#banner").addClass("d-none");
    })
    //1.cart 버튼 누르면  주문상품의 상품명, 수량, 가격을 업데이트한다. 
    //2. 결제창으로 이동할것인지 확인한다. 

    $("#cart").click(function(){ 
        var order = {
            buyItem : "페리클라르 접시 핑크" ,
            buyCount : 1, 
            buyPrice: 14900
        }
    
    //.prompt (); 사용자에게 입력창 띄우는 내장객체 메소드
    //.confrim(); 확인 true, c취소 false로 의사 선택창을 띄움
        var userChoice = confirm("장바구니에 담았습니다. 결제창으로 이동하시겠습니까?");
        userChoice  ? location.href ="/payment" : null; //삼항조건연산자
    })
    //전체메뉴 누르면 모든 메뉴를 펼쳐 놓는다. 

    //캐러셀 기능을 커스터마이징
    
})