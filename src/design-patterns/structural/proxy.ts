/**
 * Lets you provide a substitute or placeholder for another object. A proxy controls
 * access to the original object, allowing you to perform something either before or
 * after the request gets through to the original object.
 */

import { fakePromise } from "../../util/promise";

/**
 * The Subject interface declares common operations for both RealSubject and the
 * Proxy. As long as the client works with RealSubject using this interface,
 * you'll be able to pass it a proxy instead of a real subject.
 */
interface YoutubeService {
  downloadVideo(videoId: string): Promise<Buffer>;
}


class ThirdPartyYoutubeService implements YoutubeService {
  async downloadVideo(videoId: string): Promise<Buffer> {
    // sleep for 2 seconds
    console.log(`Downloading video: ${videoId}`);
    await fakePromise(2000);

    return Buffer.from(videoId);
  }
}


// NOTE: the proxy service works exactly like the real service, but implementing a cache.
export class YoutubeServiceProxy implements YoutubeService {
  private youtubeService: ThirdPartyYoutubeService;
  private cachedVideos: { [key: string]: Buffer; } = {}

  /**
   * The Proxy maintains a reference to an object of the RealSubject class. It
   * can be either lazy-loaded or passed to the Proxy by the client.
   */
  constructor(youtubeService: YoutubeService) {
    this.youtubeService = youtubeService;
  }

  checkVideoCache(videoId: string): Buffer {
    return this.cachedVideos[videoId];
  }

  async downloadVideo(videoId: string): Promise<Buffer> {
    const cache = this.checkVideoCache(videoId);
    if (!cache) {
      this.cachedVideos[videoId] = await this.youtubeService.downloadVideo(videoId);
    }

    console.log('Here is the video:', this.cachedVideos[videoId]);
    return this.cachedVideos[videoId];
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}


(async () => {
  const downloader = new ThirdPartyYoutubeService();
  await downloader.downloadVideo('123');

  const cachedDownloader = new YoutubeServiceProxy(downloader);
  await cachedDownloader.downloadVideo('456');
  await cachedDownloader.downloadVideo('123');
  await cachedDownloader.downloadVideo('456');
  await cachedDownloader.downloadVideo('456');
  await cachedDownloader.downloadVideo('456');
})()
