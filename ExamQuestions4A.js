/**
 * Created by Dino on 1/7/2017.
 */

// Question 1 ------ Explain the concept of Hybrid Mobile App Development
// http://js-plaul.rhcloud.com/hybrid1/hybrid1.html
 /*

En hybrid mobil applikation gør det muligt at brugte HTML5 apps inde i en native container.
Dette combinere de bedste og dårlige elementer fra native og Html5Apps.


En hybrid Mobil Applikation er uddelt i 4 lag.

Første lag er din Applikation's frontend
Andet lag er din applikations kode.
Tredje lag er udviklingsframework (Cordova/PhoneGap)
Fjerde lag er native funktioner som bliver brugt af dit udviklingsframework.





 */

// Question 2 ------  Explain the Pros & Cons of using Hybrid Mobile App Development compared to Native App Development

/*

Hybrid Mobile App:
Pros:
Hybrid App er mere frontend kodnings orienteret.
Hybrid App er meget hurtigere at teste, i forhold til emulationen af en telefon i native.

Cons:
Langsom performance hvor Native er hurtig.
Hybrid App er mere frontend kodnings orienteret.
 */


// Question 3 ------ Explain about the "building blocks" involved in an ionic Hybrid Application

/*

 Komponenter i Ionic er genbruglige elementer som fungerer som building blocks.
 Komponenter er opbygget af HTML, css og nogle gange JavaScript.
 Alle Ionic komponenter tilpasser sig automatisk til den platform som kører din applikation, også kaldt Platform Continuity.

*/

// Question 4 ------ Explain, using an example you have implemented, the "fundamentals" of an ionic application.

/*

indtast "ionic serve" i terminalen og hit enter.
Det burde åbne en ny side i ionic, hvor vi bruger building blocks.

Eksempel på brug i index.html

 <ion-side-menu-content>
 <ion-header-bar class="bar-dark">
 <h1 class="title">Todo</h1>
 <!-- New Task button-->
 <button class="button button-icon" ng-click="newTask()">
 <i class="icon ion-compose"></i>
 </button>
 </ion-header-bar>
 <ion-content>
 <!-- our list and list items -->
 <ion-list>
 <ion-item ng-repeat="task in tasks">
 {{task.title}}
 </ion-item>
 </ion-list>
 </ion-content>
 </ion-side-menu-content>
 */

// Question 5 ------  Explain using an example how your Hybrid Application communicates with a backend
// and how CORS problems were solved (if any)



// Question 6 ------  Explain, with focus on location, technologies related to locations used on:
//   Your app (client side)
//   Your backend
