jQuery('#frmSubmit').on('submit',function(e){
	e.preventDefault();
	jQuery('#msg').html('Please wait...');
	jQuery('#btnSubmit').attr('disabled',true);
	jQuery.ajax({
		url:'https://script.google.com/macros/s/AKfycbyZHnDkwzlEVws4GegKsI4fjcVhj7ULZraaGBmB5MVc9RSSxwHihXnUkwvjueKhm7iyYg/exec',
		type:'post',
		data:jQuery('#frmSubmit').serialize(),
		success:function(result){
			jQuery('#frmSubmit')[0].reset();
			jQuery('#msg').html('Thank You');
			jQuery('#btnSubmit').attr('disabled',false);
			//window.location.href='';
		}
	});
  });
