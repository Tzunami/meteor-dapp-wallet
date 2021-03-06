/**
Template Controllers

@module Templates
*/

/**
The balance template

@class [template] elements_balance
@constructor
*/

/**
The available units

@property selectableUnits
*/
selectableUnits = [{
    text: 'EARTH',
    value: 'ether'
},
{	
    text: 'ETHER',
    value: 'ether'
},
{
    text: 'BTC',
    value: 'btc'
},
{
    text: 'CDN',
    value: 'cad'
},				   
{
    text: 'USD',
    value: 'usd'
},
/*{
    text: 'CNY',
    value: 'cny'
},                   
{
    text: 'JPY',
    value: 'jpy'
},
{
    text: 'GBP',
    value: 'gbp'
},*/				   
{
    text: 'EUR',
    value: 'eur'
}];


Template['elements_selectableUnit'].helpers({
    /**
    Gets currently selected unit

    @method (selectedUnit)
    */
    'selectedUnit': function(){
        var unit = _.find(selectableUnits, function(unit){
            return unit.value === EthTools.getUnit();
        });

        if(unit)
            return unit.value;
    },
    /**
    Return the selectable units

    @method (selectedUnit)
    */
    'units': function(){
        return selectableUnits;
    }
});

Template['elements_selectableUnit'].events({
    /**
    Select the current section, based on the radio inputs value.

    @event change .inline-form
    */
    'change .inline-form': function(e, template, value){
        EthTools.setUnit(value);
    }
});
