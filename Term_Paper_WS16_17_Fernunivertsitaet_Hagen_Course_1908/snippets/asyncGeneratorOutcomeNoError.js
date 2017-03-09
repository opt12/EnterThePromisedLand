//Call with runAsync(generator)(false) yields:
//20:	 asyncFoo(One, 500) just started async processing.
//30: main program finished execution. The rest is async.
//534: async One just resolved.
//538:	 asyncFoo(Two A, 1000) just started async processing.
//543:	 asyncFoo(Two B, 500) just started async processing.
//1543: async Two A just resolved.
//1544: async Two B just resolved.
//1544:	 asyncFoo(Three, 1000) just started async processing.
//2550: async Three just resolved.
//2550: *** Generator cleanup. ***
//2551: final Result: All async Tasks finished successfully