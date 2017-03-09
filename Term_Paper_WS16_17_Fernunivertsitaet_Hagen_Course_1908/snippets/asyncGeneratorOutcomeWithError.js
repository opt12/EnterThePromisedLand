
//Call with runAsync(generator)(true) yields:
//20:	 asyncFoo(One, 500) just started async processing.
//30: main program finished execution. The rest is async.
//537: async One just resolved.
//537:	 asyncFoo(Two A, 1000) just started async processing.
//537:	 asyncFoo(Two B, 500) just started async processing.
//1544: async Two A just resolved.
//1544: *** Generator cleanup. ***
//1544: Ooops, error occured: 1544: Ooops