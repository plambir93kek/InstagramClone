import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IComment {
  author: string,
  text: string,
  postId: string
}

interface IAddCommentAction {
  text: string,
  postId: string
}

interface IState {
  [postId: string]: IComment[]
}

const initialState: IState = {
  '1': [
    {
      author: 'Sunboy',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      postId: '1'
    },
    {
      author: 'Sunboy',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
      postId: '1'
    },
  ],
  '2': [
    {
      author: 'Sunboy',
      text: 'Я, в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет, проживаю на триллионах и триллионах таких же планет. ',
      postId: '2'
    },
    {
      author: 'Sunboy',
      text: 'Планет, как эта Земля. Мне этот мир, уже во многом понятен, и ищу я здесь только одного: покоя, умиротворения, и вот этой гармонии - от слияния с бесконечно-вечным, от созерцания этого великого фрактального подобия',
      postId: '2'
    },
    {
      author: 'Sunboy',
      text: 'и от вот этого замечательного всеединства существа, бесконечно-вечного, куда ни посмотри: хоть в глубь - в бесконечно малое, хоть ввысь - в бесконечно большое. ',
      postId: '2'
    },
  ]
}

const commmentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<IAddCommentAction>) => {
      state[action.payload.postId].push({
        author: 'Sunboy',
        text: action.payload.text,
        postId: action.payload.text
      })
    }
  }
})

export default commmentsSlice.reducer
export const { addComment } = commmentsSlice.actions
export const selectComments = (state: RootState) => state.comments