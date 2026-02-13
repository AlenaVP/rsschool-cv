# rsschool-cv

## Alena Papruha

discord: AlenaVP\
e-mail: poprugo@gmail.com

## Front-End Developer

+ Frontend Developer with experience of building production-ready applications using Angular, TypeScript, and scalable SPA architectures

### Key skills

Angular\
Typescript\
JavaScript\
HTML5\
CSS3\
Visual Studio Code\
ServiceNow\
Git

### Code examples

```javascript
    import { inject } from '@angular/core';
    import { CanActivateFn, Router } from '@angular/router';

    import TokenService from 'src/app/auth/service/token.service';

    export const authGuard: CanActivateFn = () => {
      if (!inject(TokenService).isAuthenticated()) {
        return inject(Router).createUrlTree(['login']);
      }
      return true;
    };
```
### Projects
[Cudo-Shop .................... [ Angular, Commercetools API ] - link to github project wiki](https://github.com/IevgeniiaAbdulina/cudo-shop/wiki)\
[Cristmas-Shop .............. [ HTML5, CSS3, JavaScript ] - link to deploy](https://rolling-scopes-school.github.io/alenavp-JSFEEN2024Q4/christmas-shop)

### Education
##### additional education
2025\
RS School\
JavaScript/Front-end (HTML, CSS, JavaScript, Git, Visual Studio Code, SCSS, Figma, Webpack, TypeScript)

<details><summary>(the certificate is under the cut)</summary>
  <img width="512" height="362" alt="certificate 2025" src="/rsschool/rsschool-cv/img/JS-FE-2025.jpg" />
</details>

##### higher education
Belarusian State University, Minsk\
Physics, Atomic physics and semiconductors

### Languages

English — Upper Intermediate — B2\
Polish — Intermediate — A1
