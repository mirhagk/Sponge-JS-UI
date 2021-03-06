
var getSchema= DataObjectTools.getCachedData('getSchemaByTypeVersion');
var getAgroObject= DataObjectTools.getCachedData('getAgroObject');

Template.dataObject.dataObject= function( objectId ) {
    return getAgroObject(objectId);
};

Template.dataObject.getType= DataObjectTools.getType;

Template.dataObject.format= DataObjectTools.formatValue;

Template.dataObject.args= function( values ) {
    if ( !values ) return;

    var schema= getSchema({type: this.objectType, version: this.version});

    return DataObjectTools.formatIteratorValues( values, schema );
};

Template.dataObject.description= function() {
    return new GuiTools.Edit({ context: this, property: 'description' });
};

