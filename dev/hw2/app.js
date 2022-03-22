var msg = 'Hello World';
console.log(msg);

var obj = new Object();
{
    obj.name = 'object';
    obj.type = 'nothing';
    obj.sayHello = function () {
        console.log('Hello, World!');
    };
}

obj.sayHello();