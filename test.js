const arr1 = [{id:1, name: 'foo'}, {id:2, name: 'bar'}];
const arr2 = [{id:3, name: 'bla'}, {id:1, name:'foo'}, {id:4, name:'baz'}];

function noDublikate(a,b){
    const aArr = [];
    aArr.push(...a);
    const bArr = [];
    bArr.push(...b);

    for(i = 0; i<aArr.length; i++){
        for(f=0; f<bArr.length; f++){            
            if( JSON.stringify(bArr[f]) === JSON.stringify(aArr[i])){
          aArr.splice([i], 1);
      }
        }      
    }    
    return aArr.concat(bArr);
}

noDublikate(arr1, arr2)