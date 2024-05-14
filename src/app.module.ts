import { Module } from '@nestjs/common';
import { RankModule } from './rank/rank.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [RankModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  providers: [],
})
export class AppModule {}
