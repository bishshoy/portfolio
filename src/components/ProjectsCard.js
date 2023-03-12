import React from 'react';

import fdlImage from '../images/fdl.png';
import easrganImage from '../images/easrgan.png';
import gfiapImage from '../images/gfiap.png';
import depthEstImage from '../images/depthestimation.png';

const ProjectsCard = ({ identifier }) => {
  return (
    <div
      className='container w-full p-6 mx-auto my-16 border-2 border-gray-300 group rounded-xl md:max-w-3xl'
      id={identifier}
      style={{ scrollMarginTop: '7rem' }}
    >
      <h1 className='p-4 text-xl font-semibold leading-relaxed text-center text-gray-700 sm:text-2xl'>
        {contents[identifier].title}
      </h1>
      <div className='flex flex-col'>
        <p className='max-w-2xl px-4 mx-auto text-sm font-medium leading-relaxed text-left text-gray-600 sm:text-base'>
          {contents[identifier].authors}
        </p>
        <p className='px-4 mx-auto my-3 font-semibold leading-relaxed text-right text-gray-600 sm:text-lg'>
          {contents[identifier].venue}
        </p>
        <div className='flex flex-row justify-center max-w-lg mx-auto'>
          <a
            className='mx-auto'
            href={contents[identifier].link}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-4 py-2 mx-4 mt-4 text-sm text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Paper
            </button>
          </a>
          <a
            className='mx-auto'
            href={contents[identifier].code}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-4 py-2 mx-4 mt-4 text-sm text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Code
            </button>
          </a>
        </div>
      </div>
      <hr className='my-4' />
      <img src={contents[identifier].image} alt={identifier} />
      <p className='mt-10 mb-5 leading-relaxed text-justify text-gray-600'>
        {contents[identifier].abstract}
      </p>
    </div>
  );
};

export default ProjectsCard;

const contents = {
  paper1: {
    title:
      'Knowledge Diversification in Ensembles of Identical Neural Networks',
    authors: 'Bishshoy Das, Sumantra Dutta Roy',
    venue: 'BMVC 2022',
    image: fdlImage,
    link: 'https://github.com/bishshoy/bishshoy/raw/main/FDL.pdf',
    code: 'https://github.com/bishshoy/FDL',
    abstract:
      'Diversity in representations is key to enhancing the performance of neural networks in an ensemble. In standard neural network ensemble techniques, two or more networks are trained independently and their logits or predictions are combined using a voting procedure or linear combination strategy. This procedure does not incorporate the exchange of information between the base networks of the ensemble. We propose a method for improving learnt representations in an ensemble by employing feature exchange between base models as a part of the training objective. Feature Difference Loss or FDL compels networks in an ensemble to learn diverse features in a Euclidean sense, thereby directly optimizing model diversity. Experiments with ensembles of two, three and four networks show significant performance boosts over competing ensemble techniques. The gains are larger for datasets with fewer examples per class, such as MNIST, CIFAR-10 and CIFAR-100. Positive gains can also be observed in large datasets such as ImageNet. The gains also generalize across several architectures from simple ConvNets to deeper networks such as VGG and ResNets.',
  },
  paper2: {
    title:
      'Edge-aware Image Super-resolution using a Generative Adversarial Network',
    authors: 'Bishshoy Das, Sumantra Dutta Roy',
    venue: 'Springer - SN Computer Science',
    image: easrganImage,
    link: 'https://github.com/bishshoy/bishshoy/raw/main/EaSRGAN.pdf',
    code: 'https://github.com/bishshoy/easrgan',
    abstract:
      'Edge-awareness is an important factor in the perception of high frequency details. MSE-based single image super-resolution (SISR) algorithms, such as SRResNet do not deliver perceptually sharp images, but maximizes PSNR (Peak Signal-to-Noise Ratio). Edge details are often lost in such algorithms. A variant of SRResNet based on a generative adversarial network (GAN) model, named SRGAN, aims at achieving higher perceptual sharpness by trading in PSNR. This drop in PSNR is often massive and is attributed to the occurrence of unwanted artifacts. We introduce EaSRGAN, an edge-aware generative adversarial network, which reduces artifacts, delivers highly sharp and photorealistic images with PSNR values better than SRGAN. EaSRGAN treats high frequency regions separately from flat regions which brings in awareness of edges in the super-resolution output. Combined with a multi-stage training process separate for edge and flat areas, these loss functions make the generator and the discriminator edge-aware. We compare our results with state-of-the-art SISR algorithms. EaSRGAN delivers superior perceptual clarity like that of SRGAN, while maintaining high PSNR by attenuating artifacts.',
  },
  paper3: {
    title: 'Adaptive CNN Filter Pruning using Global Importance Metric',
    authors:
      'Milton Mondal*, Bishshoy Das*, Sumantra Dutta Roy, Pushpendra Singh, Brejesh Lall, Shiv Dutt Joshi',
    venue: 'Elsevier CVIU',
    image: gfiapImage,
    link: 'https://github.com/bishshoy/bishshoy/raw/main/GFI-AP.pdf',
    code: 'https://github.com/miltonmondal/GFI-AP',
    abstract:
      "The depth and width of CNNs have increased over the years so as to learn a better representation of the input-output mapping of a dataset. However, a significant amount of redundancy exists among different convolutional kernels. Several methods on pruning suggest that trimming redundant parameters can produce compact structures with minor degradation in classification performance. Existing pruning methods reduce the number of filters at a uniform rate (i.e. pruning same percentage of filters from each layer) in every convolutional layer, which is suboptimal. In this paper, we conduct experiments to observe the sensitivity of each and every filter towards the final performance of the neural network. The essence of comparing filter importance on a global scale and subsequently pruning the neural network adaptively, is highlighted for the first time in this paper. Based on our observations, we propose a novel method named 'Global Filter Importance based Adaptive Pruning (GFI-AP)' that assigns importance scores to all filters based on how the network learns the input-output mapping of a dataset, which can then be compared across all the other convolutional filters. Our results show that non-uniform pruning achieves better compression as compared to uniform pruning. We demonstrate that GFI-AP significantly decreases the number of FLOPs (floating point operations) of VGG and ResNet networks in ImageNet and CIFAR datasets, without substantial drop in classification accuracy. GFI-AP reduces more number of FLOPs compared to existing pruning methods, for example, the ResNet50 variant of GFI-AP provides an additional 11% reduction in FLOPs over Taylor-FO-BN-72% while achieving higher accuracy.",
  },
  paper4: {
    title:
      'Graph-based Depth Estimation in a Monocular Image using Constrained 3D Wireframe Models',
    authors: 'Bishshoy Das, H Dutta, Manas Kamal Bhuyan',
    venue: 'CVIP 2020',
    image: depthEstImage,
    link: 'https://github.com/bishshoy/bishshoy/raw/main/depth-estimation-cvip.pdf',
    code: 'code4',
    abstract:
      'In this paper, the problem of estimating the depth of an object from its monocular image is addressed. Here, basically, an algorithm is developed, which performs shape matching, and as a result, achieve accurate depth maps of objects. In the algorithm, first, an optimal camera position is determined. Then, the 3D model is projected onto the image plane of the camera, yielding a projected 2D image of the 3D model. An objective function determines a score based on graph-based feature matching, and the depth map is extracted from the geometrical information of the 3D model. Finally, the depth map and the original image are combined to create a 3D point cloud simulation of the object. Experimental analysis shows the efficacy of the proposed method.',
  },
};
