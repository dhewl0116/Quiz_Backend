import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RankService } from './rank.service';
import { DesignRankSchema, DevRankSchema } from './schema/rank.schema';
import { RankController } from './rank.controller';
import * as dotenv from "dotenv";
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`),
    MongooseModule.forFeature([
      { name: 'DevRank', schema: DevRankSchema },
      { name: 'DesignRank', schema:DesignRankSchema },
    ]),
    ],
  providers: [RankService],
  controllers: [RankController]
})
export class RankModule {}
