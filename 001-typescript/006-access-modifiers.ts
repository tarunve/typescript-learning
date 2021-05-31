/**
 *  public : visible to all
 *  private : visible to class
 *  protected : visible to class and subclass.
 */
class AccessModifier{
    /**
     *  This constructor is doing following things:
     *  1.  creating 2 private member variables.
     *  2.  using the member vars created as arguments of constructors.
     *  3.  assigning  the arguments to the member variables. 
     * 
     *  Nice shortcut for defining and initializing variables.
     */

    readonly var3 : string = "Tarun"; // for defining the read only variables.

    constructor(private var1 : string, private var2 : string){

    }

    getVar1() : any{
        return this.var1;
    }
    getVar2() : any{
        return this.var2;
    }
}

var access : AccessModifier = new AccessModifier("ABC", "DEF");
console.log(access.getVar1());
console.log(access.getVar2());

// readonly var
console.log(access.var3);
// a.var3 = "hduhd"; // error since it is readonly property