import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //auto delete wrong field not in DTO
      whitelist: true,
      //Chặn không cho gửi lên và trả về lỗi nếu có field nằm ngoài DTO
      forbidNonWhitelisted: true, //Phải kết hợp cùng whitelist: true thì mới hoạt động
    }),
  );
  await app.listen(3000);
}
bootstrap();
