import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './files.entity';
import { FileDto } from './files.dto';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private FileRepository: Repository<File>,
  ) {}

  async create(data: FileDto) {
    const fileData = await this.FileRepository.create(data);
    await this.FileRepository.save(fileData);
    return fileData;
  }

  async shows() {
    return await this.FileRepository.find();
  }

  async showDetail(id: number) {
    return await this.FileRepository.findOne({ where: { id } });
  }

  async edit(id: string, data: Partial<FileDto>) {
    await this.FileRepository.update({ id }, data);
    return;
  }

  async delete(id: string) {
    const deleteFile = await this.FileRepository.findOne({ where: { id } });
    await this.FileRepository.delete({ id });
    return deleteFile;
  }
}
