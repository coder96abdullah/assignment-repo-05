// const btns=document.querySelectorAll('.kbd'); 
let count = 0;
const arr = [];
document.getElementById('buy-btn').addEventListener('click',function(){
      document.getElementById('mains').scrollIntoView({behavior:'smooth'});
})
for (const btn of document.querySelectorAll('.kbd')) {
    btn.addEventListener('click', function () {
        if (arr.includes(btn.innerText))
            alert('Its already taken');
        else {

            arr.push(btn.innerText);

            count++;
            if (count <= 4) {

                btn.classList.add('bg-green-700', 'text-white');
                document.getElementById('seat-booked').innerText = count;

                document.getElementById('seat-leaft').innerText = document.getElementById('seat-leaft').innerText -1;
                const num = document.createElement('p');
                num.innerText = btn.innerText + ' --------------------Economy--------------- ' + '550';
                document.getElementById('seat-details').appendChild(num);
                const total = count * 550;
                document.getElementById('total-price').innerText = total.toFixed(2);

                // Next button activate work
                if (document.getElementById('number-inp').value.length !== 0) {
                    document.getElementById('next-btn').removeAttribute('disabled');
                    document.getElementById('next-btn').classList.add('bg-green-700', 'text-white');


                }
                else {
                    document.getElementById('number-inp').addEventListener('keyup', function (event) {
                        if (event.key !== undefined) {
                            document.getElementById('next-btn').removeAttribute('disabled');
                            document.getElementById('next-btn').classList.add('bg-green-700', 'text-white');


                        }
                    })

                }





                if (count == 4) {
                    document.getElementById('copun').removeAttribute('disabled');
                    document.getElementById('apply-btn').addEventListener('click', function () {
                        if (document.getElementById('copun').value === 'NEW15') {

                            document.getElementById('vanish').classList.add('hidden');
                            let tem = document.createElement('p');
                            const discount = document.getElementById('total-price').innerText * 0.15;
                            tem.innerText = 'discount : ' + discount.toFixed(2);

                            document.getElementById('replace').appendChild(tem);
                            document.getElementById('grand-total').innerText = (total - discount).toFixed(2);


                        }
                        else if (document.getElementById('copun').value === 'Couple 20') {
                            document.getElementById('vanish').classList.add('hidden');
                            let tems = document.createElement('p');
                            let discounts= document.getElementById('total-price').innerText * 0.2;
                            tems.innerText='discount : ' + discounts.toFixed(2);


                            document.getElementById('replace').appendChild(tems);
                            document.getElementById('grand-total').innerText = (total - discounts).toFixed(2);
                        }
                        else
                            alert('coupon is not correct');
                    })

                }

            }
            else
                alert('One person can not purchase more than 4 ticket');





        }
    })
}

document.getElementById('next-btn').addEventListener('click', function () {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');

})


