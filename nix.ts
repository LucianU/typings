function buildPythonPackage(): Package {
}

function mkDerivation(): Package {
}

export interface Package {
  args: any;            // Arbitrary arguments passed to the derivation.

  buildCommand: string; // Shell command used to build the derivation.
  builder: string;      // Path to the Nix builder used for building the derivation.

  depsBuildBuild: string[];  // List of build-time dependencies of the build-time dependencies.
  depsBuildBuildPropagated: string[];  // List of propagated build-time dependencies of the build-time dependencies.
  depsBuildTarget: string[];  // List of build-time dependencies of the target-time dependencies.
  depsBuildTargetPropagated: string[];  // List of propagated build-time dependencies of the target-time dependencies.
  depsHostHost: string[];  // List of host-time dependencies of the host-time dependencies.
  depsHostHostPropagated: string[];  // List of propagated host-time dependencies of the host-time dependencies.
  depsTargetTarget: string[];  // List of target-time dependencies of the target-time dependencies.
  depsTargetTargetPropagated: string[];  // List of propagated target-time dependencies of the target-time dependencies.

  doCheck: boolean;     // Whether to run tests when building the derivation.
  doInstallCheck: boolean;  // Whether to run tests when installing the derivation.

  drvAttrs: any;        // Attributes of the derivation.
  drvPath: string;      // Path to the Nix store entry for the derivation.

  name: string;         // Name of the derivation.

  out: string;          // Path to the output of the derivation.
  outPath: string;      // Path to the output of the derivation.
  outputName: string;   // Name of the output of the derivation.
  outputs: any;         // Outputs generated by the derivation.

  override: any;        // Shell commands to override the derivation.
  overrideAttrs: any;   // Shell commands to override attributes of the derivation.
  overrideDerivation: any;  // Shell commands to override the derivation.

  passthru: any;        // Arbitrary attributes passed through to the derivation.
  patches: string[];    // List of patches to apply to the source code.
  pname: string;        // Name of the derivation.

  propagatedBuildInputs: string[];  // List of build inputs to propagate to dependent derivations.
  propagatedNativeBuildInputs: string[];  // List of native build inputs to propagate to dependent derivations.

  src: string;          // Path to the source code used by the derivation.
  stdenv: string;       // Path to the Nix standard environment used for building the derivation.
  strictDeps: boolean;  // Whether to fail if a dependency is missing.
  system: string;       // System type for which the derivation is built.
  type: string;         // Type of the derivation.
  userHook: any;        // Shell commands to run after the derivation is built.
  version: string;      // Version of the derivation.
}

