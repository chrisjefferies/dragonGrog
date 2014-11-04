<?php
    $subject = $_POST['subject'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'contact-form'; 
    $to = 'dragongrogonline@gmail.com';
    $human = $_POST['human'];
    $addMe = $_POST['addMe'];
			
    $body = "
Subject: $subject\n
First: $firstname\n
Last: $lastname\n
E-Mail: $email\n
Add Me: $addMe\n
Message:\n $message
";
				
	if ($_POST['submit'] && $human == '4') {
		if (mail ($to, $subject, $body, $from)) 
			{
				echo '
					<div id="contact">
						<div id="download-link-contact">
							<h2>
								Thanks!
							</h2>
							<h2>
								Redirecting to <a href="index.html#contact">Home</a>...
							</h2>
						</div>
					</div>
					';
			} 
		else { 
				echo '
						<div id="contact"><h2>Something went wrong.</h2></div>	
						'; 
				} 
		} 
	else if ($_POST['submit'] && $human != '4') 
		{
			if (mail ($to, $subject, $body, $from)) 
				{
					echo '
						<div id="contact">
							<div id="download-link-contact">
								<h2>
									Thanks!
								</h2>
								<h2>
									Redirecting <a href="index.html#contact">Home</a>...
								</h2>
							</div>
						</div>
						';
				} 
			else { 
					echo '<div id="contact"><h2>Something went wrong.</h2></div>'; 
				} 
		}
       
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Dragon Grog</title>
  
  <meta name="description" content="A character brewer">
  		<!-- Google Analytics -->
  <script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-43651845-3', 'auto');
		ga('send', 'pageview');

	</script>
  
  <meta http-equiv="refresh" content="0;URL='index.html#contact'" />
  
</head>

<body>
	
	
	
</body>
</html>