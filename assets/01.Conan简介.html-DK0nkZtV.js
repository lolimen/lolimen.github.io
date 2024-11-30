import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as a,o as t}from"./app-CgyEwi_p.js";const r="/assets/images/conan-systems.png",i="/assets/images/conan-binary_mgmt.png",p={};function s(l,n){return t(),o("div",null,n[0]||(n[0]=[a('<h1 id="conan简介" tabindex="-1"><a class="header-anchor" href="#conan简介"><span>Conan简介</span></a></h1><p>Conan是一个可以帮C/C++进行依赖管理的包管理器。它是免费、开源、跨平台的。目前支持Windows, Linux, OSX, FreeBSD, Solaris等平台。同时也支持嵌入式、移动端（IOS，Andriod）、 或者直接基于裸机之上的目标程序开发。它当前支持各种构件系统， 例如CMake，Visual Studio（MSBuild），Makefiles，Scons等等。</p><p>Conan是分布式的，它允许运行自己私有的包管理器托管自己私有的包和二进制文件。 Conan是基于二进制管理的，它可以为包生成各种不同配置、不同体系架构或者编译器版本的二进制文件。</p><p>Conan相对比较成熟和稳定，有一个全职团队在维护它。Conan保证前向兼容，社区相对成熟， 从开源到商业公司都有使用。它有一个官方的中央仓<a href="https://conan.io/center" target="_blank" rel="noopener noreferrer">ConanCenter</a>。</p><p>Conan的源码遵循 MIT license，位于github : https://github.com/conan-io/conan。</p><h2 id="分布式的包管理器" tabindex="-1"><a class="header-anchor" href="#分布式的包管理器"><span>分布式的包管理器</span></a></h2><p>Conan是分布式的，遵循C/S架构。客户端可以从不同的远端server（“remotes”）上获取或上传包。 和git的<code>git pull</code>和<code>git push</code>类似。</p><p>Conan的服务端主要负责包的存储，并不构建和产生包。包产生于Conan的客户端，包括包中的二进制也是在客户端编译而成。</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图描述了conan的主要组成：</p><ul><li>Conan Client：Conan的客户端。它是一个基于命令行的程序，支持包的创建和使用。Conan客户端有一个包的本地缓存， 因此你可以完全离线的创建和测试和使用本地的包。</li><li>JFrog Artifactory Community Edition (CE)：<a href="https://conan.io/downloads" target="_blank" rel="noopener noreferrer">JFrog Artifactory Community Edition (CE)</a> 是官方推荐的用于私有部署的Conan服务器程序。这个是JFrog Artifactory的免费社区版， 包含了WebUI、LDAP协议、拓扑管理、REST API以及能够存储构建物的通用仓库。 下载Docker Image：<code>docker pull docker.bintray.io/jfrog/artifactory-cpp-ce</code>。</li><li>Conan Server：这是一个与Conan Client一起发布的小的服务端程序。它是一个Conan服务端的开源实现， 只包含服务端的基本功能，没有WebUI以及其它高级功能。</li><li>ConanCenter：这是官方的中央仓，用于管理社区贡献的各种流行开源库，例如Boost，Zlib，OpenSSL，Poco等。</li></ul><h2 id="基于二进制的包管理" tabindex="-1"><a class="header-anchor" href="#基于二进制的包管理"><span>基于二进制的包管理</span></a></h2><p>Conan最强大的特性使它能为任何可能的平台和配置生成和管理预编译的二级制文件。使用预编译的二进制文件可以避免 用户反复的从源码进行构建，节省大量的开发以及持续集成服务器用于构建的时间， 同时也提高了交付件的可重现性和可跟踪性。</p><p>Conan中的包由一个&quot;conanfile.py&quot;定义。该文件定义了包的依赖、包含的源码、以及如何从源码构建出二进制文件。 一个包的&quot;conanfile.py&quot;配置可以生成任意数量的二进制文件，每个二进制可以面向不同的平台和配置 （操作系统、体系结构、编译器、以及构件类型等等）。二进制的创建和上传，在所有平台上使用相同的命令， 并且都是基于一套包的源码产生的。使用Conan不用为不同的操作系统提供不同的解决方案。</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用Conan从服务器安装包也很高效。只用从服务端下载所需平台和配置对应的二进制文件即可，不用下载所有的二进制。 如果所有的二进制都不可用，也可以用客户端的源码重新构建包。</p><h2 id="支持所有的平台-构建系统以及编译器" tabindex="-1"><a class="header-anchor" href="#支持所有的平台-构建系统以及编译器"><span>支持所有的平台，构建系统以及编译器</span></a></h2><p>Conan可以工作在Windows, Linux (Ubuntu, Debian, RedHat, ArchLinux, Raspbian), OSX, FreeBSD, 以及 SunOS系统上。因为它是可移植的，其实它可以运行在所有可以运行python的平台上。 它的目标是针对所有存在的平台，从裸机到桌面端、移动端、嵌入式以及交叉编译。</p><p>Conan支持当前所有的构建系统。它内建了与当前最流行的构建系统的集成，例如CMake、Visual Studio (MSBuild)、 Autotools、 Makefiles, SCons等等。Conan并不强制所有的包都是用相同的构建系统， 每个包可以使用自己的构架系统，并且可以依赖于使用不同构建系统的其它包。Conan也支持与其它构建系统继承， 包括一些专有的构建系统。</p><p>Conan支持管理任何编译器的任何版本，包含主流的gcc、cl.exe、clang、apple-clang、intel等， 支持它们的各种配置、版本、运行时和C++标准库。Conan也支持各种客户自定义的编译器配置。</p><p>Conan需要Python3来运行，现在已可以安装Conan 2.7.0版本。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p><a href="https://conan.io/" target="_blank" rel="noopener noreferrer">Conan主页</a></p><p><a href="https://conan.io/center" target="_blank" rel="noopener noreferrer">Conan Center</a></p><p><a href="https://ccup.github.io/conan-docs-zh/01-introduction.html" target="_blank" rel="noopener noreferrer">Conan介绍</a></p><p><a href="https://blog.guorongfei.com/2018/04/23/conan-tutorial/" target="_blank" rel="noopener noreferrer">C++包管理器——conan</a></p>',26)]))}const C=e(p,[["render",s],["__file","01.Conan简介.html.vue"]]),h=JSON.parse('{"path":"/03.%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8/Conan/01.Conan%E7%AE%80%E4%BB%8B.html","title":"Conan简介","lang":"zh-CN","frontmatter":{"title":"Conan简介","date":"2024-08-20T00:00:00.000Z","order":1,"category":["工具使用"],"tag":["Conan"],"description":"Conan简介 Conan是一个可以帮C/C++进行依赖管理的包管理器。它是免费、开源、跨平台的。目前支持Windows, Linux, OSX, FreeBSD, Solaris等平台。同时也支持嵌入式、移动端（IOS，Andriod）、 或者直接基于裸机之上的目标程序开发。它当前支持各种构件系统， 例如CMake，Visual Studio（MSB...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/03.%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8/Conan/01.Conan%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"Mr.Li"}],["meta",{"property":"og:title","content":"Conan简介"}],["meta",{"property":"og:description","content":"Conan简介 Conan是一个可以帮C/C++进行依赖管理的包管理器。它是免费、开源、跨平台的。目前支持Windows, Linux, OSX, FreeBSD, Solaris等平台。同时也支持嵌入式、移动端（IOS，Andriod）、 或者直接基于裸机之上的目标程序开发。它当前支持各种构件系统， 例如CMake，Visual Studio（MSB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/images/conan-systems.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T13:53:16.000Z"}],["meta",{"property":"article:author","content":"Mr.Li"}],["meta",{"property":"article:tag","content":"Conan"}],["meta",{"property":"article:published_time","content":"2024-08-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-30T13:53:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Conan简介\\",\\"image\\":[\\"https://mister-hope.github.io/assets/images/conan-systems.png\\",\\"https://mister-hope.github.io/assets/images/conan-binary_mgmt.png\\"],\\"datePublished\\":\\"2024-08-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-30T13:53:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Li\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"分布式的包管理器","slug":"分布式的包管理器","link":"#分布式的包管理器","children":[]},{"level":2,"title":"基于二进制的包管理","slug":"基于二进制的包管理","link":"#基于二进制的包管理","children":[]},{"level":2,"title":"支持所有的平台，构建系统以及编译器","slug":"支持所有的平台-构建系统以及编译器","link":"#支持所有的平台-构建系统以及编译器","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1726728859000,"updatedTime":1732974796000,"contributors":[{"name":"lyw","email":"806555632@qq.com","commits":2}]},"readingTime":{"minutes":4.24,"words":1272},"filePathRelative":"03.工具使用/Conan/01.Conan简介.md","localizedDate":"2024年8月20日","excerpt":"\\n<p>Conan是一个可以帮C/C++进行依赖管理的包管理器。它是免费、开源、跨平台的。目前支持Windows,\\nLinux, OSX, FreeBSD, Solaris等平台。同时也支持嵌入式、移动端（IOS，Andriod）、\\n或者直接基于裸机之上的目标程序开发。它当前支持各种构件系统，\\n例如CMake，Visual Studio（MSBuild），Makefiles，Scons等等。</p>\\n<p>Conan是分布式的，它允许运行自己私有的包管理器托管自己私有的包和二进制文件。\\nConan是基于二进制管理的，它可以为包生成各种不同配置、不同体系架构或者编译器版本的二进制文件。</p>\\n","autoDesc":true}');export{C as comp,h as data};
