// BELL
let n = true,
sign_like = dcqa(".sign_like"),
dsh_del = dcqa(".dsh_del"),
k = "./icon/bell-fill.svg",
m = "./icon/bell.svg",
bell = dcqa(".bell");
bell.addEventListener("click", () => {
    if (n) {
        bell.classList.add("activ")
        bell.src = k
        n = false
    }else{
        bell.classList.remove("activ")
        bell.src = m
        n = true
    }
});

// load
let yangilanish = () => {
    sign_like.classList.add("activ") 
    setTimeout(() => {
        sign_like.classList.remove("activ") 
    },5000)
    dsh_del.addEventListener("click", () => {
        sign_like.classList.remove("activ")
    })
}

// class chaqirish
function dcqa(elm){
    return document.querySelector(elm)
}
function dcqaAll(elm){
    return document.querySelectorAll(elm)
}


// Mini modal
let likex = dcqa(".likex"), disx = dcqa(".disx"), dissss = dcqa(".dissss"), likeeee = dcqa(".likeeee"), alert_like = dcqa(".alert_like"), alert_dis = dcqa(".alert_dis");
// like
function checked(){
    alert_like.classList.add("activ") 
    setTimeout(() => {
        alert_like.classList.remove("activ") 
    },2500);
}
likex.addEventListener("click", () => {
    alert_like.classList.remove("activ")
})
// dislike
function dislike(){
    alert_dis.classList.add("activ") 
    setTimeout(() => {
        // alert_like.classList.add("start") 
        alert_dis.classList.remove("activ") 
    },2500);
}
disx.addEventListener("click", () => {
    alert_dis.classList.remove("activ")
})


// kelgan ma'lumotni jsondan chiqarish va o'zgaruvchiga tenglash
let DataStorange = JSON.parse(localStorage.getItem('data')) || [];
let profil = dcqa(".profil");

// baza
function localStorageData(){
    DataStorange = JSON.parse(localStorage.getItem('data')) || [];
    profil.innerHTML = ""
    if ( DataStorange.length === 0 ){
        profil.innerHTML = "<h1 class='profil_h1'>No information available!</h1>"
    } else {
        DataStorange.forEach((val,i) => {
            profil.innerHTML += `
            <div class="profil_name" id="tbody">
                <img src="./img/av_operat.png" alt="" class="pr_img">
                <p class="pr_name pr_p">${val.name}</p>
                <p class="pr_email pr_p">${val.email}</p>
                <p class="pr_phone pr_p">${val.phone}</p>
                <p class="pr_number pr_p">${val.number}</p>
                <p class="pr_data pr_p">${val.data}</p>
                <div class="profil_edit">
                    <button class="pr_edit" onclick="editStorange(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </button>
                </div>
                <div class="profil_delete">
                    <button class="pr_delete" onclick="deleteStorange(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
            </div>  
            
            `
        })
        checked()
    }
}
localStorageData()

let data = {}, index = null, AddBtn = dcqa(".add_btn"), body = dcqa("body"), modalName = dcqa(".modalb"), modal = dcqa(".modal_add"), modalBody = dcqa(".add_body"), addNew = dcqa(".add_new"), btn_close = dcqa(".add_close"), form = dcqa(".form");

// MODAL OYNA
addNew.addEventListener("click", () => {
    setTimeout(() => {
        body.classList.add("activ")
    },30)
    setTimeout(() => {
        modal.classList.add("activ")
        modalBody.classList.add("activ")
        body.classList.remove("activ")
    },700)
})
// MODAL OYNADAN CHIQISH QILISH
btn_close.addEventListener("click", () => {
    modal.classList.remove("activ")
    modalBody.classList.remove("activ")
    body.classList.remove("activ")
    index = null;
    modalName.innerHTML = "ADD STUDENT";
    AddBtn.innerHTML = "ADD"
    inputs.forEach((btn,i) => {
        btn.value = ""
    })
})

// MA'LUMOT QO'SHISH PROFILS
form.addEventListener("submit", (e) => {
    // yangilashni to'xtatish
    e.preventDefault();
    console.log(data);
    if ( index === null ) {
        
        if ( localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), data]))
        } else {
            // localga JSON qilib jo'natish datani [massiv] qilib 
            localStorage.setItem('data', JSON.stringify([data]))
        }
        e.target.reset()
        modal.classList.remove("activ")
        modalBody.classList.remove("activ")
        localStorageData()
    } else {
        if ( localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify([...DataStorange.slice(0,index), data, ...DataStorange.slice(index+1, DataStorange.length)]))
        }
        e.target.reset()
        modal.classList.remove("activ")
        modalBody.classList.remove("activ")
        localStorageData()
        modalName.innerHTML = "ADD STUDENT"
        AddBtn = "ADD"
        index = null
    }
})

let inputs = dcqaAll(".inputs");
inputs.forEach((btn) => {
    btn.addEventListener("change", (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        data = {
            ...data, [e.target.name]: e.target.value
        }
    })
})

// DELETE
function deleteStorange(i){
    console.log(DataStorange.slice(i,i+1));
    localStorage.setItem('data', JSON.stringify([...DataStorange.slice(0,i), ...DataStorange.slice(i+1, DataStorange.length)]));
    localStorageData();
    dislike();
}

// EDIT
function editStorange(i){
    addNew.click();
    modalName.innerHTML = "EDIT STUDENT"
    AddBtn.innerHTML = "EDIT"
    index = i;
    inputs.forEach((btn) => {
        btn.value = DataStorange[i][btn.name]
    })
}

let search = dcqa(".search");

search.addEventListener("input", (e) => {
    if ( e.target.value === "" ) {
        localStorageData()
    } else {
        let NewData = DataStorange.filter((val) => {
            return val.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        })
        if ( NewData.length === 0 ) {
            profil.innerHTML = `<h1 class="malumot">Ma'lumot topilmadi</h1>`
        } else {
            profil.innerHTML = ""
            NewData.forEach((val, i) => {
                profil.innerHTML += `
                <div class="profil_name" id="tbody">
                    <img src="./img/av_operat.png" alt="" class="pr_img">
                    <p class="pr_name pr_p">${val.name}</p>
                    <p class="pr_email pr_p">${val.email}</p>
                    <p class="pr_phone pr_p">${val.phone}</p>
                    <p class="pr_number pr_p">${val.number}</p>
                    <p class="pr_data pr_p">${val.data}</p>
                    <div class="profil_edit">
                        <button class="pr_edit" onclick="editStorange(${i})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="profil_delete">
                        <button class="pr_delete" onclick="deleteStorange(${i})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </div>
                </div>  
                
                `
            })
        }
    }
})