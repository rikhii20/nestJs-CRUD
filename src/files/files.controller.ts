import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileDto } from './files.dto';

@Controller('files')
export class FilesController {
  constructor(private FilesService: FilesService) {}

  @Post()
  postFile(@Body() data: FileDto) {
    return this.FilesService.create(data);
  }

  @Get()
  getAll() {
    return this.FilesService.shows();
  }

  @Get(':id')
  getDetail(@Param('id') id: number) {
    return this.FilesService.showDetail(id);
  }

  @Put(':id')
  editFile(@Param('id') id: string, @Body() data: Partial<FileDto>) {
    return this.FilesService.edit(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.FilesService.delete(id);
  }
}
