$(function(){
	var zed = "¥";
	$(".num").click(function(){
		zed += $(this).html();
		$(".money1").val(zed)
		var $amountInput = $(".money1").val(zed)
		$amountInput.val($amountInput.val().replace(/[^\¥\-?\d.]/g, "").
        //只允许一个小数点              
        replace(/^\./g, "").replace(/\.{2,}/g, ".")
        .
        // // //只能输入小数点后两位
        replace(".", "$#$").replace(/\./g, "")
        .replace("$#$", ".")
        .replace(/^\¥(\-)*(\d+)\.(\d\d).*$/, '¥$1$2.$3'));
           });
		var index = zed.indexOf(".");  
		


	$(".delete").click(function(){
		zed=$(".money1").val().substring(0,$(".money1").val().length-1);
		zed= zed?zed:"¥"
		$(".money1").val(zed);

	})

})