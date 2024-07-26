import React from 'react';

function PromisePage(props) {
    const loop = (name) => {
        const random = Math.floor(Math.random() * 100) + 1;
        for(let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`);
        }
    }

    //프로미스 객체 생성 
    const testPromise = async () => {
        loop("test1");
        // if(dfd) {
        //     throw new Error();
        // } reject
        return "test반복 완료"; //resolve
       
    }

    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("test2");
            resolve("test2반복 완료")
        });
    }

    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("test3");
            resolve("test3반복 완료")
        });
    }

    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if(num === 0) {
                reject("오류!"); //예외가 터져도 기다림
                return;
            }
            resolve("성공4");
        });
    }

    const testPromise5 = async (num) => {
        console.log("test5");
        if(num === 0) {
            //return "오류55";
            throw new Error("오류5");  //밑은 실행안됨 (리턴없어도됨), 예외터지면 바로 실행
        }
        return "성공5";
    }


    const handleClick1 = () => {
        testPromise().then(r => {
            console.log(r);
            testPromise2().then(r => {
                console.log(r);
                testPromise3().then(r => {
                    console.log(r);
            
                });
            });
        });
    
    }

    //리턴이 프로미스
    const handleClick2 = async () => {
        const r1 = await testPromise(); // await없으면 프로미스 객체 반환
        console.log(r1);
        const r2 = await testPromise2(); // await있으면 resolve결과 반환
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);

    }

    const handleClick3 = async () => {
        testPromise4(1)
        .then(r => {
            console.log(r);
            testPromise5(1)
            .then(r => {
                console.log(r);
                
            })
            .catch(e => {
                console.error(e);
            });
        })
        .catch(e => {
            console.error(e);
            testPromise5(1)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.error(e);
            });
        });  
    }

    const handleClick4 = async () => {
        try {
            const r = await testPromise4(1);
            console.log(r);
        } catch (error) {
            console.error(error);
        }

        try {
            const r = await testPromise5(1);
            console.log(r);
        } catch (error) {
            console.error(error);
        }
       
       
        // let test5 = 0;
        // try {
        //     test5 = await testPromise5(0);
        //     console.log(test5);
        // } catch (error) {
        //     console.log("실행됨");
        //      console.log(error);
        // }
        
    }


    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>
            <button onClick={handleClick2}>버튼2</button>
            <button onClick={handleClick3}>버튼3</button>
            <button onClick={handleClick4}>버튼4</button>
        </div>
    );
}

export default PromisePage;