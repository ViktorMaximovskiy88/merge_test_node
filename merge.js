// Create a new symbols for make 'private' class member functions
const arrangeByTime = Symbol('arrangeByTime');
const compareObr = Symbol('compareObr');
const mergeFunc = Symbol('mergeFunc');
class ObTable {
    constructor() {
        
    }
    /**
     * Merge two objects based on their properties.
     * @param {Object} ob1 - The first object to merge.
     * @param {Object} ob2 - The second object to merge.
     */
    [mergeFunc](ob1, ob2) {
        // Check if ob1 has a "Vehicle" property, otherwise check for "Truck" property
        // If both are null, assign null to v1, similar work for 4 lines.
        let v1 = ob1.hasOwnProperty('Vehicle') ? ob1.Vehicle : ob1.hasOwnProperty('Truck')? ob1.Truck : null;
        let v2 = ob2.hasOwnProperty('Vehicle') ? ob2.Vehicle : ob2.hasOwnProperty('Truck')? ob2.Truck : null;
        let t1 = ob1.hasOwnProperty('Load') ? ob1.Load : ob1.hasOwnProperty('Trailer')? ob1.Trailer : null;
        let t2 = ob2.hasOwnProperty('Load') ? ob2.Load : ob2.hasOwnProperty('Trailer')? ob2.Trailer : null;
        
        // Loop through all properties in v1 and update them with the corresponding values from v2,
        // if v2 is not an empty string (i.e. a value was provided for that property in ob2)
        for(let prop in v1)
            v1[prop] = (v2[prop] != "") ? v2[prop] : v1[prop];
        for(let prop in t1)
            t1[prop] = (t2[prop] != "") ? t2[prop] : t1[prop];
    }
    /**
     * Compare two objects based on their properties and return 1 if they differ significantly or 0 otherwise, -1 error.
     * @param {Object} ob1 - The first object to compare.
     * @param {Object} ob2 - The second object to compare.
     * @returns {number} - Returns 1 if the objects differ significantly or 0 otherwise, -1 error.
     */
    [compareObr](ob1, ob2) {
        // Create Date objects for the time property of each object, using an arbitrary date (2023-04-20) as the reference
        const timeA = new Date(`2023-04-20T${ob1.Time}`);
        const timeB = new Date(`2023-04-20T${ob2.Time}`);
        // Calculate the time difference between the two objects in minutes
        const diffInMs = timeB - timeA;
        const diffInMins = diffInMs / 1000 / 60;
        // If the time difference is more than 15 minutes, return 1
        // 1 means different
        if(diffInMins > 15)
            return 1;
        // If the "Dir" property(Direction) of the two objects differs, return 1    
        if(ob1.Dir != ob2.Dir)
            return 1;
        
        if(this.hooks == undefined)
            return -1;
        // Get the hooks properties from the current object (assuming it has a "hooks" property), with fallbacks for certain
        // properties if they are not present
        const hook1 = this.hooks.hasOwnProperty("Vehicle") ? this.hooks.Vehicle : this.hooks.hasOwnProperty("Truck") ? this.hooks.Truck : null; 
        if(hook1 == null)
            return -1;
        // Get the "Vehicle", "Truck", "Load", and "Trailer" properties from each object, with fallback to null if they are not
        // present
        const hook2 = this.hooks.hasOwnProperty("Load") ? this.hooks.Load : this.hooks.hasOwnP
        const hook3 = this.hooks.hasOwnProperty("Chassis") ? this.hooks.Chassis : null;
        let v1 = ob1.hasOwnProperty('Vehicle') ? ob1.Vehicle : ob1.hasOwnProperty('Truroperty("Trailer") ? this.hooks.Trailer : null; ck')? ob1.Truck : null;
        let v2 = ob2.hasOwnProperty('Vehicle') ? ob2.Vehicle : ob2.hasOwnProperty('Truck')? ob2.Truck : null;
        let t1 = ob1.hasOwnProperty('Load') ? ob1.Load : ob1.hasOwnProperty('Trailer')? ob1.Trailer : null;
        let t2 = ob2.hasOwnProperty('Load') ? ob2.Load : ob2.hasOwnProperty('Trailer')? ob2.Trailer : null;

        // If the "SI" property of the "Load"/"Trailer" object for both objects differ, return 1
        if(t1.SI != t2.SI)
            return 1;

        let diff = 0 ;// initialize diff to 0
        // Loop through hook1 properties in the "Vehicle"/"Truck" object, comparing them between ob1 and ob2
        for(let i=0; i < hook1.length; i++) {           
            if(v1[hook1[i]] != "" && v2[hook1[i]] != "" && v1[hook1[i]] != v2[hook1[i]]) {
                diff = 1;
                break;
            }
        } 
        // If there are no hooks for "Load"/"Trailer", return the value of diff
        if(hook2 == null)
            return diff;           
        // Loop through hook2 properties in the "Load"/"Trailer" object, comparing them between ob1 and ob2
        for(let i=0; i < hook2.length; i++) {           
            if(t1[hook2[i]] != "" && t2[hook2[i]] != "" && t1[hook2[i]] != t2[hook2[i]]) {
                diff = 1;
                break;
            }
        } 
        // If there are no hooks for "Chassis", return the value of diff
        if(hook3 == null)
            return diff;
        // If the "Chassis" property of the "Load"/"Trailer" object for both objects differ, set diff to 1
        if(t1.Chassis != t2.Chassis)
            diff = 1;

        return diff;// return the final value of diff (either 0 or 1)
        // 0 means can be merge. 1 : can not merge
    }
    /**
     * Compare two object's time and arrange whole objects.
     * @param {Object} obj - The Object to arrange by Time property
     */
    [arrangeByTime](objs) {
        objs.sort(function(a, b) {
            // Convert time strings to Date objects so they can be compared
            const timeA = new Date(`2023-04-20T${a.Time}`);
            const timeB = new Date(`2023-04-20T${b.Time}`);
            
            // Compare the two times and return -1 or 1 depending on which is earlier
            if (timeA < timeB) {
              return -1;
            } else if (timeA > timeB) {
              return 1;
            } else {
              return 0;
            }
        });
    }
    installHook(hooks) {
        this.hooks = hooks;
    }
    /**
     *This function merges observations by comparing them
     */
    mergeObservations(observations) {
        this.observations = observations; 
        // Sort the observations by time
        this[arrangeByTime](this.observations);
         // If there are less than two observations, return
        let len = this.observations.length;
        if(len < 2)
            return;
        // Compare each pair of observations
        for(let i = 0; i < len; i++) {
            if(this.observations[i].deleted == 1) {
                // Skip deleted observations
                continue;
            }
            for(let j=i+1; j < len; j++) {
                if(this.observations[j].deleted == 1) {
                    // Skip deleted observations
                    continue;
                }
                // Skip deleted observations
                let r = this[compareObr](this.observations[i], this.observations[j]);
                if(r == 0) {
                    // If the two observations are the same, merge them
                    this[mergeFunc](this.observations[i], this.observations[j]);
                    // Mark the second observation as deleted
                    this.observations[j].deleted = 1;
                }
            }
        }
        // Remove deleted observations
        this.observations = this.observations.filter(item => !item.hasOwnProperty('deleted') || item.deleted !== 1)
        // Update the observation IDs
        len = this.observations.length;
        for(let i = 0; i < len; i++) {
            this.observations[i].ID = "0"+(i+1);
        }
        return this.observations;
    }

    /**
     * This function adds a new observation to the existing list of observations.
     * @param {Object} newObr - The new observation object to add
     */
    addNewObservation(newObr) {
        // Get the current length of the list of observations
        let len = this.observations.length;
        
        // Check if the new observation already exists in the list
        for(let i = 0; i < len; i++) {
            // Compare the new observation with each observation in the list
            let r = this[compareObr](this.observations[i], newObr);
            if(r == 0) {
                // If the new observation already exists, return
                return;
            }
        }
        // Add the new observation to the list
        this.observations.push(newObr);
        return this.observations;
    }
    printResult() {
        console.log(this.observations);
    }
}
//define Hooks
const hooks = {
    Vehicle: ["LP","Num","DOT"],
    Load:["LP","Number"],
    Chassis:["LP","Num"]
};
const obt = new ObTable();
obt.installHook(hooks);

// Use a named function expression for consistency
const mergeObservations = function (observations) {
    return obt.mergeObservations(observations);
};

// Export the mergeObservations function
module.exports = mergeObservations;