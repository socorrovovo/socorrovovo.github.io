---
layout: default
---
<div ng-controller="ToolsController">
  <div class="row">
    <div class="col s12 m12 l8 categories">
      <span><i class="fa fa-shopping-bag"></i> Na bolsa da vovó:</span>
      <ul>
        <li class="active"><a href="#">Todos</a></li>
        <li><a href="#">Design</a></li>
        <li><a href="#">Front-End</a></li>
        <li><a href="#">Produtividade</a></li>
        <li><a href="#">Outros</a></li>
      </ul>
    </div>
    <div class="col s12 m12 l4 search">
      <input type="text" ng-model="txtSearch" id="txtSearch" placeholder="pesquisar" ng-trim="false">
    </div>
  </div>
  <div class="ng-cloak">
    <table class="bordered highlight responsive table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobre</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="tool in tools | filter: txtSearch">
          <td><a ng-href="tool.site" ng-bind="tool.name"></a></td>
          <td ng-bind="tool.about"></td>
          <td>
            <span ng-repeat="tag in tool.tags" class="chip tag" ng-click="findTo()" ng-bind="tag"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
