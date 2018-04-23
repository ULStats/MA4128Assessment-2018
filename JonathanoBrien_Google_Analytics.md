# Google Analytics

![Google Analytics Logo](https://cdn.techadvisor.co.uk/cmsdata/features/3666560/is-google-analytics-down-main_thumb800.jpg)
 
Google Analytics is a analytics service offered by Google that tracks and reports website traffic. It helps Domain owners track customers/visitors on there webpage. Google Analytics was launched in November 2005 after Google acquired Urchin (a web statistics analysis program). There is a web based UI or A mobile app, an SDK that allows gathering usage data from iOS and Android Apps. 
 
 ## History
Google Analytics was previously known as Urchin before Google bought the company in 2005. Google launched there Google branded software in 2005 and On March 28, 2012 Urchin was discontinuation. For the first year Google analytics was rolled out using a lottery system as the servers couldn't deal with the traffic. 

## How it works
Google Analytics is implemented with "page tags", in this case, called the Google Analytics Tracking Code, which is a snippet of JavaScript code that the website owner adds to every page of the website. The tracking code runs in the client browser when the client browses the page (if JavaScript is enabled in the browser) and collects visitor data and sends it to a Google data collection server as part of a request for a web beacon. Here is a sample of the java code that is used on the Bank of Ireland [Homepage](https://www.bankofireland.com/)
<!-- Modified Analytics tracking code with Optimize plugin -->
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39451131-17', 'auto', {allowLinker: true});  // Update tracker settings 
  ga('require', 'GTM-M4G5V2R');           // Add this line
                                        
  
</script>    <title>
      Bank of Ireland - For small steps, for big steps, for life    </title>
    		</head>
