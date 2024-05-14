import * as mongoose from 'mongoose';

// MongoDB 서버와 3시간 차이가 있다고 가정
const timeDifferenceInMilliseconds = 3 * 60 * 60 * 1000; // 시간 차이를 밀리초 단위로 계산

export const DevRankSchema = new mongoose.Schema({
  name: String,
  score: Number,
  same_name: Number,
  createdAt: { type: Date, default: () => new Date(Date.now() - timeDifferenceInMilliseconds) } // 현재 시간에서 시간 차이를 빼서 기본값으로 설정
});

export const DesignRankSchema = new mongoose.Schema({
  name: String,
  score: Number,
  same_name: Number,
  createdAt: { type: Date, default: () => new Date(Date.now() - timeDifferenceInMilliseconds) } // 현재 시간에서 시간 차이를 빼서 기본값으로 설정
});
