# directives
## First Directive  
  copy boilerplate   
  template vs templateUrl
    cp -r .../boilerplate/. ../
  restrict: 'AEC'  set up all 3  

  ### add Controller  
  How to access data?
  Show Controller Data
  Within directive element tags
    transclude:true   
  ``` javascript
    <ng-transclude></ng-transclude>  
    ```

  ### Isolate scope
  Scope within directive   inherits from controller  
  ##### scope  
  scope: {}  use prefixes  
  '@', //this is for already   evaluated to a string

  '=',  //this is for 2 way   binding  

  '&',  //behavior function  

  For the 2 way binding add an ng-model  

  Add a 2nd directive that names the data differently and map the prefix value to the new names

  ### Laurem Pixel directive  
  add an image with height, width, title

####  boilerplate
A working directive  
Have to modify index.js and client.js
