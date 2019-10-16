# BlogApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Consignes

Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "don't love it".  Chaque post aura la forme suivante : 

``post: {
       title: string,
       content: string,
       loveIts: number,
       created_at: Date
     }``
     
Quand un post a plus de "love it" que de "don't love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts < 0, il sera coloré en rouge.

Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.

En termes de structure :

- votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent
- votre PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu
- chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template
- les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent
Voici un exemple de mise en page :  

Exemple de mise en page

![Mise en page](https://user.oc-static.com/upload/2018/03/13/15209587533174_imgActivite1.jpg) 

Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !

## Consignes 2

Vous allez :

- créer un service qui stockera l'array des posts et pourra les émettre sous forme de Subject — le service permettra également l'ajout d'un nouveau post et la suppression d'un post existant
- intégrer un bouton "Supprimer post" sur chaque PostListItemComponent
- créer un nouveau component, NewPostComponent, qui comportera un formulaire (méthode template ou réactive au choix) qui permettra à l'utilisateur d'entrer le titre et le contenu d'un nouveau post — ce nouveau post sera ensuite créé et ajouté au service, et l'utilisateur sera redirigé vers la liste des posts
- intégrer un menu de navigation en haut (avec le routing correspondant), permettant de naviguer vers la liste des posts (/posts) et vers le formulaire (/new) (le path vide sera redirigé vers le path /posts) — le lien du menu correspondant à la route active comportera la classe active
- faire en sorte que le changement du nombre de loveIts soit enregistré dans le service

- N'oubliez pas qu'il faut intégrer le service dans l'application de manière globale.
- Pour la souscription et l'émission du Subject, pensez à l'ordre des opérations.
- N'oubliez pas que vous pouvez passer l'index de l'instance d'un component dans *ngFor et vous en servir dans le component.
- Pensez au fonctionnement du routing : comment il est intégré dans l'application ET dans le template.
- Pensez à émettre le Subject du service après chaque modification.
- N'oubliez pas de unsubscribe() !
- Si vous décidez de trier votre liste, n'oubliez pas que cela aura un impact sur l'index reçu par chaque component : selon votre logique, il faudra peut-être modifier la méthode qui permet la suppression d'un post.
- Bonus : pour une application vraiment dynamique, intégrez un backend Firebase qui rend permanente votre liste de posts !

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


