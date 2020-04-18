function workFib (num) {
  
  function fibRec(nRec) {
    if (nRec <= 1) {
      return nRec
    }
    return fibRec(nRec-1) + fibRec(nRec-2)
  }
  
  let result = fibRec(num)
  return result;
}


const workLoop = (data) => {
  let i = 0;
  console.log('starting data 1', data)
  console.log('starting data 2', data)
  console.log('starting data 3', data)
  for (i = 0; i < data; i++) {
    // heavy CPU load ...
    
  }

  return i;
}


let work = workFib;

(async () => {
  const { job, start, stop } = require("microjob");
  
  try {
    // start the worker pool
    await start();
 
    let results 
    let startTime = Date.now();

    // work(2000000000); // approx 1 second 
    // work(2000000000); // approx 1 second 

    let count = 0
    let jobs = []
    jobs.push( job(work, {data: 44} ) );
    // jobs.push( job(work, {data: 44} ) );
    // jobs.push( job(work, {data: 44} ) );
    // jobs.push( job(work, {data: 44} ) );


    console.log('jobs sent');
    results = await Promise.all(jobs)

    console.log(`jobs done in ${Date.now()-startTime}`, results) 
    console.log('count', count)
    
  } catch (err) {  console.error(err);  } 
  finally {  await stop();  } // shutdown worker pool


})();