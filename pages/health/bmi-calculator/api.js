const setBmiApi = (male,age,m,h) => {
        let res,check,maleText,color;
        if(m===0 || h===0) {check = "Ожидаем результатов"}
        if(res === undefined) {res = "Ожидаем результатов"}
        if(m!=0 && h!=0) {res=Math.round(m/(h*h));};
        if(male==='male') {
            if(age >= 18 && age <= 24) {
                switch(true) {
                    case res<=19: check = "Недостаточный вес";color="blue";break;
                    case res >= 20 && res <= 25:check ='Нормальный вес';color="green";break;
                    case res >= 26 && res <= 30: check ='Избыточный вес';color="purple";break;
                    case res >= 31 && res <= 40: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 41: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 25 && age <= 34) {
                switch(true) {
                    case res<=20: check ="Недостаточный вес";color="blue";break;
                    case res >= 21 && res <= 26:check ='Нормальный вес';color="green";break;
                    case res >= 27 && res <= 31: check ='Избыточный вес';color="purple";break;
                    case res >= 32 && res <= 41: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 42: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 35 && age <= 44) {
                switch(true) {
                    case res<=21: check ="Недостаточный вес";color="blue";break;
                    case res >= 22 && res <= 27:check ='Нормальный вес';color="green";break;
                    case res >= 28 && res <= 32: check ='Избыточный вес';color="purple";break;
                    case res >= 33 && res <= 42: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 43: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 45 && age <= 54) {
                switch(true) {
                    case res<=22: check ="Недостаточный вес";color="blue";break;
                    case res >= 23 && res <= 28:check ='Нормальный вес';color="green";break;
                    case res >= 29 && res <= 33: check ='Избыточный вес';color="purple";break;
                    case res >= 34 && res <= 43: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 44: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 55 && age <= 64) {
                switch(true) {
                    case res<=23: check ="Недостаточный вес";color="blue";break;
                    case res >= 24 && res <= 29:check ='Нормальный вес';color="green";break;
                    case res >= 30 && res <= 34: check ='Избыточный вес';color="purple";break;
                    case res >= 35 && res <= 44: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 45: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 65) {
                switch(true) {
                    case res<=24: check ="Недостаточный вес";color="blue";break;
                    case res >= 25 && res <= 30:check ='Нормальный вес';color="green";break;
                    case res >= 31 && res <= 35: check ='Избыточный вес';color="purple";break;
                    case res >= 36 && res <= 45: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 46: check ='Ожиренение 3 степени';color="red";break;
                }
            }
        }
        // female 
        if(male==='female') {
            if(age >= 18 && age <= 24) {
                switch(true) {
                    case res<=19: check ="Недостаточный вес";color="blue";break;
                    case res >= 18 && res <= 24:check ='Нормальный вес';color="green";break;
                    case res >= 25 && res <= 29: check ='Избыточный вес';color="purple";break;
                    case res >= 29 && res <= 39: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 40: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 25 && age <= 34) {
                switch(true) {
                    case res<=19: check ="Недостаточный вес";color="blue";break;
                    case res >= 20 && res <= 25:check ='Нормальный вес';color="green";break;
                    case res >= 26 && res <= 30: check ='Избыточный вес';color="purple";break;
                    case res >= 31 && res <= 40: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 41: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 35 && age <= 44) {
                switch(true) {
                    case res<=20: check ="Недостаточный вес";color="blue";break;
                    case res >= 21 && res <= 26:check ='Нормальный вес';color="green";break;
                    case res >= 26 && res <= 31: check ='Избыточный вес';color="purple";break;
                    case res >= 32 && res <= 41: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 42: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 45 && age <= 54) {
                switch(true) {
                    case res<=21: check ="Недостаточный вес";color="blue";break;
                    case res >= 22 && res <= 27:check ='Нормальный вес';color="green";break;
                    case res >= 28 && res <= 32: check ='Избыточный вес';color="purple";break;
                    case res >= 33 && res <= 42: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 43: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 55 && age <= 64) {
                switch(true) {
                    case res<=22: check ="Недостаточный вес";color="blue";break;
                    case res >= 23 && res <= 28:check ='Нормальный вес';color="green";break;
                    case res >= 28 && res <= 33: check ='Избыточный вес';color="purple";break;
                    case res >= 34 && res <= 43: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 42: check ='Ожиренение 3 степени';color="red";break;
                }
            } else if(age >= 65) {
                switch(true) {
                    case res<=23: check ="Недостаточный вес";color="blue";break;
                    case res >= 24 && res <= 29:check ='Нормальный вес';color="green";break;
                    case res >= 29 && res <= 34: check ='Избыточный вес';color="purple";break;
                    case res >= 34 && res <= 44: check ='Ожиренение 1-2 степени';color="orange";break;
                    case res >= 45: check ='Ожиренение 3 степени';color="red";break;
                }
            }
        }
        
        switch(male) {
            case 'male': maleText ='Мужской';break;
            case 'female': maleText ='Женский';break;
            case 'other': maleText ='Пол не выбран';break;
        }
        let obj = JSON.stringify({res,check,age,maleText,color});
        return obj;
};

export default setBmiApi;