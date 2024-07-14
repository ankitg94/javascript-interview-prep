//--------Eventloop-----------------
/* event loop will show you the execution javascript program in js engine
Priority level is always firstly = Synchronus<MTQ<MATQ

/*
         ----------------------------------->WebAPi    
         ^                                    |   
   |Asynchronus|                        |callback queue|
   |synchronus|                         MATQ(low Priority-
                                        like callback,settimeout,
         ^                              setinterval)
         |                                  |
         |                              MTQ(high Priority- 
         |                              like fetch,Promise,async) 
     callstack <<-----------------------------|
                [ event loop ]




*/