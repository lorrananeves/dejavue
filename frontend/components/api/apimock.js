import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },
    list_tweets(){
        return mockasync(
            [
            {
                id:1,
                author_name: 'Isaac Newton',
                author_usarname: '@isaacnewton',
                autor_avatar: "https://upload.wikimedia.org/wikipedia/commons/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg",
                created_at:'43 min',
                text: 'um objeto em repouso ou movimento retilíneo uniforme tende a permanecer nesse estado se a força resultante sobre ele é nula',
            },
            {
                id:3,
                author_name: 'René Descartes',
                author_usarname: '@descarte',
                autor_avatar: 'https://conhecimentocientifico.com/wp-content/uploads/2019/08/rene-descartes.jpg',
                created_at:'1h 43min',
                text: 'Penso, logo existo',
            },
            {
                id:3,
                author_name: 'Albert Einstein',
                author_usarname: '@albertinho',
                autor_avatar: 'https://conteudo.imguol.com.br/c/entretenimento/c3/2017/11/24/albert-einstein-1511565360545_v2_4x3.jpg',
                created_at:'2 dias',
                text: 'Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.',
            }
        ])
    }
};

export default api;
