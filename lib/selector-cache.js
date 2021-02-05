

    function lauant_Selector_Cache() {
        var collection = {};
    
        function get_from_cache( selector ) {
            if ( undefined === collection[ selector ] ) {
                collection[ selector ] = jQuery( selector );
            }
    
            return collection[ selector ];
        }
    
        return { get: get_from_cache };
    }
    
    var $el = new lauant_Selector_Cache();


    