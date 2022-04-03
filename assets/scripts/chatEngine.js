class ChatEngine{
    constructor(chatBoxId){
        this.chatBox = $(`#${chatBoxId}`);
        do {
            this.userName = prompt('Please enter your userName: ')
        } while(!this.userName)
        console.log('inside class constructor');
        // iniiate the connection
        // io is a global variable
        this.socket = io.connect('http://localhost:9000');

        if (this.userName){
            this.connectionHandler();
        }

    }


    // this will handle the to abd fro interaction b/w the observer and subscriber
    connectionHandler(){
        let self = this;

        this.socket.on('connect', function(){
            console.log('connection established using sockets...!');


            // ask to join a room
            self.socket.emit('join_room', {
                //  whenever im sending a req to join chat room, i can send some data along with it
                user_name: self.userName,
                chatroom: 'chatRoom'
            });
            // when new user joined the room
            self.socket.on('user_joined', function(data){
                console.log('a user joined!', data);
            })


        });

        // CHANGE :: send a message on clicking the send message button
        $('#btn').click(function(){
            let msg = $('#txt').val();

            if (msg != ''){
                self.socket.emit('send_message', {
                    message: msg,
                    user_name: self.userName,
                    chatroom: 'chatRoom'
                });
            }
            let mseg = {
                user: self.userName,
                message: msg.trim()
            }
            // Append 
            appendMessage(mseg, 'outgoing')
            document.getElementById('txt').value = ''
            scrollToBottom();
        });

        self.socket.on('receive_message', function(data){
            console.log('message received', data.message);

            if (data.user_name != self.userName){
                let mseg = {
                    user: data.user_name,
                    message: data.message
                }
                appendMessage(mseg, 'incoming')
                scrollToBottom();
            }
            
        });
        function appendMessage(msg, type) {
            let mainDiv = document.createElement('div')
            let className = type
            mainDiv.classList.add(className, 'message')
        
            let markup = `
                <h3>${msg.user}</h3>
                <p>${msg.message}</p>
            `
            mainDiv.innerHTML = markup
            $('#cb-meassageArea').append(mainDiv)
        }
        function scrollToBottom() {
            let messageArea = document.getElementById('cb-meassageArea');
            messageArea.scrollTop = messageArea.scrollHeight
        }
    }
}