# My porftolio website

Portfolio made by me for showcase my abilities and skills in the programming world.

Live preview <a href='https://aaronavila.vercel.app'>here</a>

## 🚀 Components info

In this project i used zero Javascript for build the components and animations

I used Astro with `<script>` tags for components with scroll animations. Works with all modern navigators

```
<script>                                                  
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {                          
			if (entry.isIntersecting) {                         
				entry.target.classList.remove('opacity-0');       
				entry.target.classList.remove('translate-y-[50%]')
				entry.target.classList.add('opacity-100');        
				entry.target.classList.add('translate-y-0');      
				                                                  
			}                                                   
		});                                                   
	});                                                     
                                                          
	const proyects = document.querySelectorAll('.show');    
	                                                        
	proyects.forEach((proyect) => {                         
		observer.observe(proyect);                            
	});                                                                                                     
</script>                                                 
```
### Feel free to contribute!

```
npm install && npm run dev
```
