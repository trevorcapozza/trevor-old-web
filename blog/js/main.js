 $(document).ready(function(){
   $('ul').click(function(){
    $('ul').toggleClass('active')
    let darkThemeEnabled = $('body').toggleClass('dark');
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
   })
  })
  
  	if (localStorage.getItem('dark-theme-enabled')) {
    	$('body').toggleClass('dark');
      $('ul').toggleClass('active');
      
    }