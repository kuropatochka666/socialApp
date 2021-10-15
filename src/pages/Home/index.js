import React from "react";

import {Message, Dialogs} from "../../components";

import "./Home.scss";

const Home = () => {
    return (
        <section className='dialog-page'>
            <Dialogs
                userId={0}
                items={[
                    {
                        text: "Привет, как дела?",
                        isReaded: false,
                        created_at: new Date(),
                        user: {
                            _id: 1,
                            fullname: "Simon Vern",
                            avatar: "https://sun3-10.userapi.com/s/v1/ig2/ivAQWpiptCSriFTRVuJ4n2mz2YnURl-GOIltzJ3Y-7NOVlA24ghML8sguMdpsntOk6KCbC1rPrrHvqTYuJAUlVII.jpg?size=100x0&quality=96&crop=10,0,949,949&ava=1",
                        }
                    },
                    {
                        text: "Я тебя убью",
                        isReaded: false,
                        created_at: new Date(),
                        user: {
                            _id: 2,
                            fullname: "Андрей новиков",
                            avatar: "https://vk.com/images/camera_100.png",
                        }
                    }

                ]}/>
            {/* <Message
				avatar='https://sun3-10.userapi.com/s/v1/ig2/ivAQWpiptCSriFTRVuJ4n2mz2YnURl-GOIltzJ3Y-7NOVlA24ghML8sguMdpsntOk6KCbC1rPrrHvqTYuJAUlVII.jpg?size=100x0&quality=96&crop=10,0,949,949&ava=1'
				text='п-п-п привет'
				date={new Date()}
				attachments={[
					{
						filename: "image.jpg",
						url: "https://source.unsplash.com/user/erondu/100x100",
					},
					{
						filename: "image.jpg",
						url: "https://source.unsplash.com/user/erondu/100x100",
					},
					{
						filename: "image.jpg",
						url: "https://source.unsplash.com/user/erondu/100x100",
					},
				]}
			/>
			<Message
				avatar='https://sun3-12.userapi.com/s/v1/if1/0MHiq1i-0Y-uhLge09b2n9Kv2josOguePauuS9Prgwy6W1fj7a-VNVjlyUtG_qZrePzZFrtR.jpg?size=50x0&quality=96&crop=305,311,201,201&ava=1'
				text='здарова епта'
				date={new Date()}
				isMe={true}
				isReaded={true}
			/>
			<Message
				avatar='https://sun3-10.userapi.com/s/v1/ig2/ivAQWpiptCSriFTRVuJ4n2mz2YnURl-GOIltzJ3Y-7NOVlA24ghML8sguMdpsntOk6KCbC1rPrrHvqTYuJAUlVII.jpg?size=100x0&quality=96&crop=10,0,949,949&ava=1'
				isTyping
			/>
			<Message
				avatar='https://sun3-10.userapi.com/s/v1/ig2/ivAQWpiptCSriFTRVuJ4n2mz2YnURl-GOIltzJ3Y-7NOVlA24ghML8sguMdpsntOk6KCbC1rPrrHvqTYuJAUlVII.jpg?size=100x0&quality=96&crop=10,0,949,949&ava=1'
				attachments={[
					{
						filename: "image.jpg",
						url: "https://source.unsplash.com/user/erondu/100x100",
					},
				]}
			/> */}
        </section>
    );
};

export default Home;
