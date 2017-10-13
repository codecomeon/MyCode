(()=>{
    console.log(111);
    class Test {
        constructor(name){
            this.name='是的';
        }
        show(){
            console.log(this.name);
        }
        test(){
            Array.of(123);
            return new Promise((resolve,reject)=>{
                resolve(1);
            });
        }
        generator(){
            function* helloGenerator(){
                yield 'yes';
                yield 'no';
                return 'ending';
            }
            return helloGenerator;
        }
        yes(){
            console.log(123);
        }
    }
})();