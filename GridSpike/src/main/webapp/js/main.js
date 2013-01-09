function bodyController($scope) {
    $scope.myData = [
        {name:"Tiancum", age:43,address:"sh"},
        {name:"Jacob", age:27,address:"sh"},
        {name:"Nephi", age:29,address:"sh"},
        {name:"Enos", age:34,address:"sh"},
        {name:"Nephi1", age:29,address:"sh"},
        {name:"Enos2", age:34,address:"sh"},
        {name:"Nephi1sdsd", age:29,address:"sh"},
        {name:"Enos1", age:34,address:"sh"}
    ];
    $scope.gridOptions = { data:'myData',
        columnDefs:[
            { field:'name', displayName:'Full Name' },
           { field:'age', displayName:'Age'}, //cellTemplate:editCell('row.entity.age')} ,
            {field:'address', displayName:"Address"}
        ],
       rowTemplate :  editRow()
    };

    function editCell(model) {
        var divElement = '<div ng-click="editable = true" ng-hide="editable">{{' + model + '}}</div>' +
            '<div><input ng-show="editable" ng-model="' + model + '"/>' +
            '<button ng-click="editable=false" ng-show="editable">ok</button></div>';
        return divElement;
    };

    function editRow(){
        var divElement = '<div ng-repeat="col in visibleColumns()" class="ngCell col{{$index}} {{col.cellClass}}"   ng-cell><input  name={{$parent.$index}}{{$index}} integer ng-show="edit" ng-model="row.entity[col.field]" /><span id={{$parent.$index}}{{$index}} style="display:none">Enter Numeric data!</span></div>'+
            '<div class="editBtn"><button ng-click="edit=true" ng-hide="edit">edit</button>' +
            '<button  ng-click="edit=false" ng-show="edit">ok</button></div>';

        return divElement;
    };

    $scope.showError=function(){
       var temp = "row.entity[col.field]";
        return  'form.'+ temp+'.$error.validInteger';
    }


}